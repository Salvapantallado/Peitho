const { Product } = require("../db.js");

async function deleteProduct(req, res) {
    try{
        const productToRemove = await Product.findByPk(req.params.id)

        await productToRemove.destroy();

        res.send("El producto fue eliminado!");
    } catch(err) {
        console.log(err);
    }
}

module.exports = {
    deleteProduct,
}