const { Router } = require("express");
const { getStories } = require("../handlers/getStories.js");
const { postStories } = require("../handlers/postStories.js");
const { deleteStories } = require("../handlers/deleteStories.js");
const router = Router();

router.get("/", getStories);

router.post("/", postStories);

router.delete("/:id", deleteStories);

module.exports = router;
