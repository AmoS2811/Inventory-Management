import { Router } from "express";
import { createProduct, getProducts, updateProduct } from "../controllers/productController";

const router = Router();

router.get("/", getProducts);
router.post("/", createProduct);
/* TODO
router.put("/", updateProduct);
router.delete("/", deleteProduct);
*/
export default router;