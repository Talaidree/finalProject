import { Router, Response, Request, NextFunction } from "express";
import { Hotline } from "../db/entities/Hotline.js";
import { createHotline, getAllHotline } from "../controllers/HotlineController.js";


const router = Router()

router.post("/", async (req:Request, res:Response, next:NextFunction)=>{

    const payload:Hotline= req.body;

    if(!payload.hotlineNumber){
        res.json({
            messege:"Some feilds are missing",
            success: false
        })
        return;
    }
    try {
        const hotline= await createHotline(payload)

        res.json({
            messege:"Hotline created successfully",
            success: true
        })
    } catch (error) {
        console.log("Error" + error);
        next(error)
    }
})

router.get("/", getAllHotline)

export default router