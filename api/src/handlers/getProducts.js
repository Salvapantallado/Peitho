	const { Product, Category } = require("../db");
var sequelize = require("sequelize");
const { Op } = require("sequelize");

 async function getAllProducts(req, res, next) {
	var page = req.query.page ? req.query.page : 0;
	// var limit = 8;
	// var offset = page * limit;
	var precio = req.query.precio;
	var categoria = req.query.categoria;
	var max = req.query.max;
	var min = req.query.min;

	try {
		if (max && min) {
			var maxmin = await Product.findAll({
				// limit: limit,
				// offset: offset,
				where: {
					price: {
						[Op.between]: [min, max],
					},
				},
			});
			return res.send(maxmin);
		}
		if (precio) {
			if (precio === "Ascendant") {
				var asc = await Product.findAll({
					// limit: limit,
					// offset: offset,
					order: sequelize.literal("price ASC"),
				});
				res.send(asc);
			}
			if (precio === "Descendant") {
				var desc = await Product.findAll({
					// limit: limit,
					// offset: offset,
					order: sequelize.literal("price DESC"),
				});
				res.send(desc);
			}
		}
		if (categoria) {
			console.log(categoria);
			var findOne = await Product.findAll({
				limit: limit,
				// offset: offset,

				include: {
					model: Category,
					attributes: ["name"],
					through: {
						attributes: [],
					},

					where: {
						name: categoria,
					},
				},
			});

			if (findOne.length === 0) {
				return res.status(404).send("Error: Name of category is invalid");
			} else return res.json(findOne);
		} else {
			const productDB = await Product.findAll({
				// limit: limit,
				// offset: offset,
				// attributes: { exclude: ["createdAt", "updatedAt"] },
				order: [
					['id', 'ASC'],
				],
				include: {
					model: Category,
					attributes: ["name"],
					through: {
						attributes: [],
					},
				},
			});

			res.send(productDB);
		}
	} catch (error) {
		next(error);
	}
};

async function getProductById(req, res, next) {
    const { id } = req.params
    try {
        const product = await Product.findOne({
            where: { id },
            include: [{
                model: Category,
                attributes: ["name"],
                through: {
                    attributes: []
                },
            },]
        });
        res.send(product);

    } catch (error) {

        next(error)
    };

};

module.exports = {
	getAllProducts,
	getProductById
};
