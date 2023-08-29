const { Product, Category } = require("../db.js");
const { Op } = require("sequelize");

async function postProduct(req, res, next) {
  const { name, description, price, image, description2, price2, category } =
    req.body;

//   let ProductToAddValues = {
//     name: name,
//     description: description,
//     price: price,
//     image: image,
//     description2: description2,
//     price2: price2,
//   };

  try {
    if (!name || !price || name === "" || price === "") {
      return res.json({ message: "Precio y nombre son requeridos" });
    }
    let productToAdd = await Product.findOrCreate({
        where: {

            name: name,
            description: description,
            price: price,
            image: image,
            description2: description2,
            price2: price2,
        }
    });

    let itemAdded = await Product.findOne({
        where: {name: name}
    })
    await Category.findOrCreate({where: {name: category}})
    let addedCategory = await Category.findOne({where: {name: category}});
    await itemAdded.addCategories(addedCategory)
    // category: await Category.findOne({ where: { name: category } })
    // productToAdd.setCategories(null);

    // if (category) {
    //   let model = await Category.findOne({ where: { name: category } });
    //   productToAdd.addCategories(model);
    // }
    // if(category && category.length > 0){
    //     category.forEach(async (name) => {
    //         const categoria = await Category.findOne({
    //             where:{
    //                 name: {
    //                     [Op.iLike]: `%${name}`,
    //                 },
    //             }
    //         });
    //         await categoria.addProduct(addProduct[0])
    //     })
    // }
    // if(addProduct[1] === true) {
    return res.status(200).json({productToAdd, message: "Producto añadido con éxito" });
    // } else {
    //     return res.status(200).json({message: "El producto ya existe"});
    // }
  } catch (error) {
    next(error);
  }
}

module.exports = {
  postProduct,
};
