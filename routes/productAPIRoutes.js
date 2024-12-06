const express = require("express");
const router = express.Router();
const ProductAPIController = require("../controllers/ProductAPIController");
const multer = require("multer");
const upload = multer({ dest: "public/images" });

router.get("/api/products", ProductAPIController.getAllProducts);
router.get("/api/products/:id", ProductAPIController.getProductById);
//ESTA ES LA QUE ESTABA ANTES   router.post('/api/products', ProductAPIController.createProduct);
//y la de abajo la nueva
router.post(
  "/api/products",
  upload.single("imagen"),
  ProductAPIController.createProduct
);

router.put("/api/products/:id", ProductAPIController.updateProduct);
router.delete("/api/products/:id", ProductAPIController.deleteProduct);

module.exports = router;
