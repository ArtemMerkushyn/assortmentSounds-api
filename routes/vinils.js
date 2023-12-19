import { Router } from "express";
import { createVinil, getAllVinils, getVinilById } from "../controllers/vinils.js";

const router = new Router();

//create vinil
//http://localhost:8080/api/vinils
router.post('/', createVinil);

//get all vinils
//http://localhost:8080/api/vinils
router.get('/', getAllVinils);

//get vinil by id
//http://localhost:8080/api/vinils/:id
router.get('/:id', getVinilById)

export default router;