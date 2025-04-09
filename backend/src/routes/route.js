const { searchCategory } = require("../controllers/search");

const router = require("express").Router();


router.get("/products", searchCategory)


module.exports = router