import { Router } from "express";
import { createVinil } from "../controllers/vinils.js";

const router = new Router();

//create vinil
//http://localhost:8080/api/vinils
router.post('/', createVinil);

//get all vinils
//http://localhost:8080/api/vinils
router.get('/', createVinil);

export default router;