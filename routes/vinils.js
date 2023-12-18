import { Router } from "express";
import { createVinil } from "../controllers/vinils.js";

const router = new Router();

//create vinil
//http://localhost:8080/api/vinils
router.post('/', createVinil);

export default router;