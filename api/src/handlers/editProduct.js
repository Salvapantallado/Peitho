const { Product } = require("../db.js");
const { Category } = require("../db.js");

async function editProduct(req, res, next) {
  const { id } = req.params;

  const { name, description, price, image, description2, price2, category } =
    req.body;

  let productValues = {
    name: name,
    description: description,
    price: price,
    image: image,
    description2: description2,
    price2: price2,
    // category: category
  };

  try {
    let productToEdit = await Product.findOne({ where: { id } });

    for (let prop in productValues) {
      productToEdit[prop] = productValues[prop];
    }

    
    productToEdit.setCategories(null);

    if(category){
      let model = await Category.findOne({where: {name: category}})
      productToEdit.addCategories(model)
    }

    // category.forEach(async (category) => {
    //   console.log(category);
    //   let model = await Category.findOne({ where: { name: category } });
    //   productToEdit.addCategories(model);
    //   console.log(productToEdit);
    // });


    await productToEdit.save();

    res.send({ msg: "El product fue editado exitosamente" });
  } catch (error) {
    console.log("aki");
    next(error);
  }
}

module.exports = {
  editProduct,
};
