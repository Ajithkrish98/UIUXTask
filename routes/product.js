const express = require("express");
const router = express.Router();

const productController = require("../controllers/Items/controller/productController");

router
    // Item Category
    .get("/findAll/:type?", productController.findAll)
    .post("/create", productController.create)
    .put("/update/:id", productController.update)
    .delete("/delete/:id", productController.deleteProduct)
module.exports = router;