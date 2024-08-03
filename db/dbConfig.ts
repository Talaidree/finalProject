import { DataSource } from "typeorm";
import { Product } from "./entities/Product.js";
import { Shop } from "./entities/Shop.js";
import { Hotline } from "./entities/Hotline.js";
import { Category } from "./entities/Category.js";


const dataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "final-db",
    synchronize: true,
    logging: false,
    entities: [Product,Shop,Hotline,Category]
})

export default dataSource;