import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Shop } from "./Shop.js";

@Entity("hotline")

export class Hotline extends BaseEntity{
    

@PrimaryGeneratedColumn("increment")
id:number

@Column("")
    hotlineNumber :number  


   @OneToOne(()=>Shop,shop=>shop.hotline) 
   @JoinColumn(
   {
         name: "shopId",
         referencedColumnName: "id"
    })
   shop:Shop
}