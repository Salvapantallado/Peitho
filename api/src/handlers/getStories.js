const { Stories } = require("../db");

async function getStories(req, res) {
	try {
		const storiesDB = await Stories.findAll({
			// limit: limit,
			// offset: offset,
			// attributes: { exclude: ["createdAt", "updatedAt"] },
			order: [
				['id', 'ASC'],
			],
		});
		res.send(storiesDB);
	}catch (err) {
		console.error(err);
	
	}
} 

module.exports = {
	getStories,
};
