const router = require("express").Router();
const Instructions = require("./instruction-model");

router.put("/:id", async (req, res, next) => {
	try {
		const insUpdate = await Instructions.update(req.params.id);
		res.status(201).json(insUpdate);
	} catch (err) {
		next(err);
	}
});

router.delete("/:id", async (req, res, next) => {
	try {
		const updatedIns = await Instructions.remove(req.params.id);
		res.status(200).json(updatedIns);
	} catch (err) {
		next(err);
	}
});

module.exports = router;
