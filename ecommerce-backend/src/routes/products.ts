import express from "express";
import {adminOnly} from "../middlewares/auth.js";
import { newProduct } from "../controllers/products.js";
import { singleUpload } from "../middlewares/multer.js";
import { getlatestProducts,getAllCategories,getAdminProducts,updateProduct,deleteProduct,getSingleProduct } from "../controllers/products.js";

const app = express.Router();

app.post("/new",adminOnly,singleUpload,newProduct);

app.get("/latest",getlatestProducts );

app.get("/categories",getAllCategories);

app.get("/admin-products",getAdminProducts);

app
  .route("/:id")
  .get(getSingleProduct)
  .put(adminOnly, singleUpload, updateProduct)
  .delete(adminOnly, deleteProduct);

export default app;