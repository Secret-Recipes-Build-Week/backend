const Auth = require("./auth-model");

module.exports = { validateRegister, checkKeys, validateLogin };

async function validateRegister(req, res, next) {
	try {
		if (
			!req.body.firstName ||
			!req.body.lastName ||
			!req.body.email ||
			!req.body.password
		) {
			res.status(401).json({
				errorMessage:
					"User must provide first name, last name, email, and password to register",
			});
		}
		const user = await Auth.findBy({ email: req.body.email });
		if (checkKeys(req.body)) {
			res.status(401).json({ errorMessage: "invalid keys on request object" });
		} else if (user) {
			res
				.status(401)
				.json({ errorMessage: "An account with this email already exists" });
		} else {
			next();
		}
	} catch (err) {
		next(err);
	}
}

function checkKeys(obj) {
	let invalidKey = false;

	Object.keys(obj).forEach((key) => {
		if (!["firstName", "lastName", "email", "password"].includes(key)) {
			invalidKey = true;
		}
		return invalidKey;
	});
}

async function validateLogin(req, res, next) {
	try {
		if (!req.body.email || !req.body.password) {
			res.status(401).json({ errorMessage: "email and password required" });
		}

		const user = await Auth.findBy({ email: req.body.email });
		if (!user) {
			res.status(401).json({ errorMessage: "invalid credentials" });
		} else {
			next();
		}
	} catch (err) {
		next(err);
	}
}
