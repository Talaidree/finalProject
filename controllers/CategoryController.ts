import { Category } from "../db/entities/Category.js"
import { AppError } from "../errors/AppError.js"
import {NextFunction, Request, Response } from "express"

const createCategory = async (payload:Category)=>{
    const category = await Category.findOne({
        where:{ 
          id:payload.id
        }
    })

    if(category){
        throw new AppError("category already exits", 409, true)
    }

    const newProduct = Category.create(payload)
    return newProduct .save()
}

const getAllCategory = async (req:Request, res:Response)=>{
    const category = await Category.find()

    res.json({
         message :"Getting all category",
  category:category

    })
}
export{createCategory,getAllCategory}