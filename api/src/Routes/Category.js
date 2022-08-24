const { Router } = require("express");
const { getCategories } = require("../handlers/getCategory.js");
const router = Router();

router.get("/", getCategories);

module.exports = router;
