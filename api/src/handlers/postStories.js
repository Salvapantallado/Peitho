const { Stories } = require("../db.js");
const { Op } = require("sequelize");

async function postStories(req, res, next) {
    console.log(req.body, "REQBODYDATA");
//   const { url, type } = req.body;

  try {
    // if (!url || url === "" || !type || type === "") {
    //   return res.json({ message: "Url y tipo requeridos" });
    // }
    const test = [];
    const data = req.body;
    await data.forEach(async element => {
        const addStories = await Stories.findOrCreate({
          where: {
            url: element.url,
            type: element.type,
          },
        });
        test.push(addStories[0])
    });

    return res
      .status(200)
      .send(test)
    //   .alert({ message: "Historia añadida con éxito" });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  postStories,
};
