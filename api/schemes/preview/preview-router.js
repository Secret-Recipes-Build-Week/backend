const router = require("express").Router();
const Preview = require("./preview-model");

router.get("/", async (req, res, next) => {
	try {
		const previews = await Preview.selectRandom();
		res.status(201).json(previews);
	} catch (err) {
		next(err);
	}
});

module.exports = router;
