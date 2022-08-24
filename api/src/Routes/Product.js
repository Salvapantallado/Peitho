const { Router } = require("express");
const { deleteProduct } = require("../handlers/deleteProduct");
const { editProduct } = require("../handlers/editProduct");
const { getAllProducts, getProductById } = require("../handlers/getProducts");
const { postProduct } = require("../handlers/postProduct");
const router = Router();

router.get("/", getAllProducts);
router.get("/:id", getProductById);

router.put("/:id", editProduct);

router.post("/", postProduct);

router.delete("/:id", deleteProduct);

module.exports = router;
