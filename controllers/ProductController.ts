import { Product } from "../db/entities/Product.js"
import { AppError } from "../errors/AppError.js"
import {NextFunction, Request, Response } from "express"

const createProduct = async (payload:Product)=>{
    const product = await Product.findOne({
        where:{ 
          id:payload.id
        }
    })

    if(product){
        throw new AppError("Product already exits", 409, true)
    }

    const newProduct = Product.create(payload)
    return newProduct .save()
}

const getAllPro = async (req:Request, res:Response)=>{
    const products = await Product.find()

    res.json({
         message :"Getting all tasks",
       products:products

    })
}
const deleteProduct = async (id:number)=>{
    const product= await Product.findOne({ where:{id:id }})

    if(!product){
        throw new AppError("product not found ", 404, true)
    }

    return product.remove()
}

const getSinglePro =async(id:any)=>{
    const product=await Product.findOne({where:{id:id}})
     if(!product)
     {
        throw new AppError ("product not found", 404, true)
     }
    return product
    }    

    

export {createProduct,getAllPro,deleteProduct,getSinglePro}