const { Stories } = require("../db.js");

async function deleteStories(req, res) {
    try{
        const StoriesToRemove = await Stories.findByPk(req.params.id)

        await StoriesToRemove.destroy();

        res.send("La historia fue eliminada!");
    } catch(err) {
        console.log(err);
    }
}

module.exports = {
    deleteStories,
}