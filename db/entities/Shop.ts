import { BaseEntity, BeforeInsert, Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product.js";
import { Hotline } from "./Hotline.js";
import bcrypt from "bcrypt"

@Entity("shop")

export class Shop extends BaseEntity{


@PrimaryGeneratedColumn("uuid")
id:string
@Column({length:255})
shopName:string
 
@Column({unique:true})
email:string

 
@Column  ()
password:string

 @OneToMany(()=>Product,product=>product.shop)
  products:Partial<Product>[];
 
  @OneToOne(()=>Hotline,hotline=>hotline.shop)
  hotline:Partial<Hotline>
  


  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
}
}