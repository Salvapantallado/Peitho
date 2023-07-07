const { Stories } = require("../db.js");
const { Op } = require("sequelize");

async function postStories(req, res, next) {
    const { url } = req.body;

    try{
        if(!url || url === ""){
            return res.json({message: "Url requerido"});
        }
        const addStories = await Stories.findOrCreate({
            where:{
                url: url,
            }
        })

        if(addStories[1] === true) {
            return res.status(200).json({message: "Historia añadida con éxito"});
        } else {
            return res.status(200).json({message: "La historia ya existe"});
        }
    } catch(error){
        next(error)
    }
}

module.exports = {
    postStories,
}