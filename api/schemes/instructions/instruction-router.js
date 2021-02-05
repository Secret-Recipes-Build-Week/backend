const router = require("express").Router();

router.put("/:id", async (req, res, next) => {
	try {
		const { id } = req.params;
	} catch (err) {
		next(err);
	}
});

module.exports = router;
