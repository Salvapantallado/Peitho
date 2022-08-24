const { Category } = require("../db");

async function getCategories(req, res) {
	try {
		var cat = await Category.findAll({
			attributes: {
				attributes: ["name"],
				through: {
					attributes: [],
				},
			},
		});
		res.json(cat);
	} catch (error) {
		return res.sendStatus(400).send(error);
	}
}

module.exports = {
	getCategories,
};
