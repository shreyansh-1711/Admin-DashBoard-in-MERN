import express, { Router } from 'express';
import { getProducts } from "../controllers/general.js";

const router = express.Router();

router.get("/products". getProducts);

export default router;