const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const { SetDataInitial } = require("./src/initialProducts/SetData.js");
const { products } = require("./src/initialProducts/ProductsData.js");
const { SetStoryData } = require("./src/initialProducts/SetStoryData.js");
const { stories } = require("./src/initialProducts/StoryMock.js");

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
	SetDataInitial(products);
	SetStoryData(stories);
	console.log("sincroniza servidor 3001");
	server.listen(process.env.PORT || 3001, () => {
		console.log(`%s listening at 3001`); // eslint-disable-line no-console
	});
});
