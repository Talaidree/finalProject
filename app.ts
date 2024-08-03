import { Request, Response, Express } from "express";
import express from 'express'
import env from "dotenv";
import { customErrorHandler, DefaultErrorHandler } from "./Middleware/errorHandler.js";
import product from "./routes/product.js";
import dataSource from "./db/dbConfig.js";
import { Category } from "./db/entities/Category.js";
import category from "./routes/category.js";
import { Shop } from "./db/entities/Shop.js";
import shop from "./routes/shop.js";
import hotline from "./routes/hotline.js";




const app =express()
env.config();
const PORT=process.env.PORT||5000
app.use(express.json())
app.use("/product",product)
app.use("/Category",category)
app.use("/Shop",shop)
app.use("/Hotline",hotline)

app.get("/", (req: Request, res: Response) => {
    res.send("hello world");
})

app.use( customErrorHandler)
app.use(DefaultErrorHandler)


dataSource.initialize().then(() => {
     console.log("connected to DB");
}).catch(err => {
     console.error('Failed to connect to DB: ' + err);
});

app.listen(PORT, () => {
    console.log(`server is running on host: http://localhost:${PORT}`);
});

export default app;