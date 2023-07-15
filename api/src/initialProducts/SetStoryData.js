const { Stories } = require("../db.js");

async function SetStoryData(storiesArray) {
	try {
		for (var e in storiesArray) {
			await Stories.findOrCreate({
				where: {
					url: storiesArray[e].url,
					type: storiesArray[e].type,
				},
			});
		}
	} catch (error) {
		return console.error(error, "errorcito uwu");
	}
}

module.exports = {
	SetStoryData,
};
