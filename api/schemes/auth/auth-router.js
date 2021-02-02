const router = require("express").Router();
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");

const Users = require("./auth-model");
const { jwtSecret } = require("../../../config/secrets");
const { validateRegister, validateLogin } = require("./auth-middleware");

router.post("/register", validateRegister, async (req, res, next) => {
	try {
		const credentials = req.body;
		console.log(credentials.password);

		const rounds = process.env.BCRYPT_ROUNDS || 8;
		const hash = bcryptjs.hashSync(credentials.password, rounds);

		credentials.password = hash;
		const newUser = await Users.add({ ...credentials, uuid: uuidv4() });
		res.status(201).json({ message: "New User Created!" });
	} catch (err) {
		next(err);
	}
});

router.post("/login", validateLogin, async (req, res, next) => {
	try {
		const { email, password } = req.body;
		const user = await Users.findBy({ email });

		if (bcryptjs.compareSync(password, user.password)) {
			const token = generateToken(user);
			res.status(200).json({
				message: `Welcome back ${user.firstName}!`,
				token,
				id: user.id,
				uuid: user.uuid,
			});
		} else {
			res.status(401).json({ errorMessage: "invalid credentials" });
		}
	} catch (err) {
		next(err);
	}
});

function generateToken(user) {
	const payload = {
		subject: user.id,
		email: user.email,
	};
	const options = {
		expiresIn: "1d",
	};

	return jwt.sign(payload, jwtSecret, options);
}

module.exports = router;
