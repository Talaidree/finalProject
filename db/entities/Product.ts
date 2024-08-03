import { BaseEntity, Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Shop } from "./Shop.js";
import { Category } from "./Category.js";

@Entity("product")

export class Product extends BaseEntity{
    

@PrimaryGeneratedColumn("increment")
id:number

@Column({length:255})
productName:string

@Column  ("float")
price:number

@ManyToOne(()=>Shop,shop=>shop.products)
 shop:Partial<Shop>
 
 @ManyToMany(()=>Category,category=>category.products)
//  @JoinColumn(
//     {
//         name: "categoryId",
//         referencedColumnName: "id"
//     }
//)
 categories:Category[]
}