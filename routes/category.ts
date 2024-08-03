import { Router, Response, Request, NextFunction } from "express";
import { Category } from "../db/entities/Category.js";
import { createCategory, getAllCategory } from "../controllers/CategoryController.js";

const router = Router()

router.post("/", async (req:Request, res:Response, next:NextFunction)=>{

    const payload:Category= req.body;

    if(!payload.categoryName){
        res.json({
            messege:"Some feilds are missing",
            success: false
        })
        return;
    }
    try {
        const category= await createCategory(payload)

        res.json({
            messege:"Category created successfully",
            success: true
        })
    } catch (error) {
        console.log("Error" + error);
        next(error)
    }
})

router.get("/", getAllCategory)

export default router