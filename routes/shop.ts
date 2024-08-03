import { Router, Response, Request, NextFunction } from "express";
import { Shop } from "../db/entities/Shop.js";
import { createShop, getAllShop } from "../controllers/ShopController.js";


const router = Router()

router.post("/", async (req:Request, res:Response, next:NextFunction)=>{

    const payload:Shop= req.body;

    if(!payload.shopName||!payload.email||!payload.password){
        res.json({
            messege:"Some feilds are missing",
            success: false
        })
        return;
    }
    try {

const shop= await createShop(payload)

        res.json({
            messege:"shop created successfully",
            success: true
        })
    } catch (error) {
        console.log("Error" + error);
        next(error)
    }
})

router.get("/", getAllShop)

export default router