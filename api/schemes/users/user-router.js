const router = require("express").Router();
const Users = require("./user-model");

router.get("/:id", async (req, res, next) => {
	try {
		const { id } = req.params;
		const user = await Users.findUserBy(id);
		console.log(user);
		res.status(200).json(user);
	} catch (err) {
		next(err);
	}
});

// router.get("/", async (req, res, next) => {
// 	try {
// 	} catch (err) {
// 		next(err);
// 	}
// });

// router.get("/", async (req, res, next) => {
// 	try {
// 	} catch (err) {
// 		next(err);
// 	}
// });

module.exports = router;
