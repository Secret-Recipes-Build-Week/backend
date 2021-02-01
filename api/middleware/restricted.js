const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../../config/secrets");

module.exports = async (req, res, next) => {
	try {
		const token = req.headers.authorization;
		if (!token) {
			res.status(401).json({ errorMessage: "token required" });
		} else if (token) {
			jwt.verify(token, jwtSecret, async (err, decoded) => {
				if (err) {
					res.status(401).json({ errorMessage: "token invalid" });
				} else {
					next();
				}
			});
		}
	} catch (err) {
		next(err);
	}
};
