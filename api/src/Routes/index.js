const { Router } = require("express");
const router = Router();
const ProductRouter = require("./Product");
const CategoryRouter = require("./Category");

router.use("/catalogo", ProductRouter);
router.use("/categoryinfo", CategoryRouter);

module.exports = router;
