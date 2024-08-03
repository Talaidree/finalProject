import { Router, Response, Request, NextFunction } from "express";
import { Product } from "../db/entities/Product.js";
import { createProduct, deleteProduct, getAllPro, getSinglePro } from "../controllers/ProductController.js";




const router = Router()

router.post("/", async (req:Request, res:Response, next:NextFunction)=>{

    const payload:Product = req.body;

    if(!payload.productName || !payload.price ){
        res.json({
            messege:"Some feilds are missing",
            success: false
        })
        return;
    }
    try {
        const product= await createProduct(payload)

        res.json({
            messege:"Product created successfully",
            success: true
        })
    } catch (error) {
        console.log("Error" + error);
        next(error)
    }
})

router.get("/", getAllPro)
router.delete("/:id", async (req:Request, res:Response, next:NextFunction)=>{

    const id =Number (req.params.id);

    try {
        const product= await deleteProduct(id)

        res.json({
            messege:"Product deleted successfully",
            success: true
        })
    } catch (error) {
        console.log("Error" + error);
        next(error)
    }
})

router.get("/:id",async(req:Request, res:Response, next:NextFunction )=> {
    try{
    const ProductId=Number(req.params.id)
     const product=await getSinglePro(ProductId)

    res.status(201).json({

        message:"Product :",
       
      product:product
    })
    }
catch (error){
    console.log("error :"+error);
    next(error)
}
});
export default router
