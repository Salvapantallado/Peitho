const { Router } = require("express");
const router = Router();
const ProductRouter = require("./Product");
const CategoryRouter = require("./Category");
const StoriesRouter = require("./Stories");

router.use("/catalogo", ProductRouter);
router.use("/categoryinfo", CategoryRouter);
router.use("/stories", StoriesRouter);

module.exports = router;
