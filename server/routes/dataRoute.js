import {Router} from "express";
import {getData} from "../controllers/dataControllers.js";

const router = Router()

router.get("/",getData)


export default router