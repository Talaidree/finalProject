import { Shop } from "../db/entities/Shop.js"
import { AppError } from "../errors/AppError.js"
import {NextFunction, Request, Response } from "express"

const createShop= async (payload:Shop)=>{
    const shop = await Shop.findOne({
        where:{ 
          id:payload.id
        }
    })

    if(shop){
        throw new AppError("shop already exits", 409, true)
    }

    const newShop = Shop.create(payload)
    return newShop .save()
}

const getAllShop= async (req:Request, res:Response)=>{
    const shop = await Shop.find()

    res.json({
         message :"Getting all Shop",
 shop:shop

    })
}
export{getAllShop,createShop}