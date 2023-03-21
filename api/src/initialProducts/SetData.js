const { Product, Category } = require("../db.js");

async function SetDataInitial(arrayProducts) {
	try {
		for (var e in arrayProducts) {
			await Product.findOrCreate({
				where: {
					name: arrayProducts[e].name,
					description: arrayProducts[e].description,
					price: arrayProducts[e].price,
					description2: arrayProducts[e].description2,
					price2: arrayProducts[e].price2,
					image: arrayProducts[e].image,
					product_qty: parseInt(arrayProducts[e].product_qty, 10),
					extra: arrayProducts[e].extra,
				},
			});

			var oneProduct = await Product.findOne({
				where: { name: arrayProducts[e].name },
			});

			await Promise.all(
				arrayProducts[e].category.map(async (e) => {
					await Category.findOrCreate({ where: { name: e } });
					let category = await Category.findOne({ where: { name: e } });
					await oneProduct.addCategories(category);
				})
			);
		}
	} catch (error) {
		return console.error(error);
	}
}

module.exports = {
	SetDataInitial,
};
