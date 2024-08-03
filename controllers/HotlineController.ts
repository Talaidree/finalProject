import { Hotline } from "../db/entities/Hotline.js"
import { AppError } from "../errors/AppError.js"
import {NextFunction, Request, Response } from "express"

const createHotline= async (payload:Hotline)=>{
    const hotline = await Hotline.findOne({
        where:{ 
          id:payload.id
        }
    })

    if(hotline){
        throw new AppError("hotline already exits", 409, true)
    }

    const newHotline = Hotline.create(payload)
    return newHotline .save()
}

const getAllHotline = async (req:Request, res:Response)=>{
    const hotline = await Hotline.find()

    res.json({
         message :"hotline all category",
          hotline:hotline

    })
}
export{createHotline,getAllHotline}