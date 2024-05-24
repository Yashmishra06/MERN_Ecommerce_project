import mongoose from "mongoose";
import { myCache } from "../app.js";
import { Product } from "../models/product.js";
import { InvalidateCacheProps, OrderItemType } from "../types/types.js";
import ErrorHandler from "./utility-class.js";

export const connectDB = () =>{
    mongoose.connect("mongodb://0.0.0.0:27017",{
        dbName:"Ecommerce_24",
    }).then(c=>console.log(`DB connected to ${c.connection.host}`))
    .catch((e)=> console.log(e));
}

export const invalidateCache = ({
    product,
    order,
    admin,
    userId,
    orderId,
    productId,
  }: InvalidateCacheProps) => {
    if (product) {
      const productKeys: string[] = [
        "latest-products",
        "categories",
        "all-products",
      ];
  
      if (typeof productId === "string") productKeys.push(`product-${productId}`);
  
      if (typeof productId === "object")
        productId.forEach((i) => productKeys.push(`product-${i}`));
  
      myCache.del(productKeys);
    }
    if (order) {
      const ordersKeys: string[] = [
        "all-orders",
        `my-orders-${userId}`,
        `order-${orderId}`,
      ];
  
      myCache.del(ordersKeys);
    }
    if (admin) {
      myCache.del([
        "admin-stats",
        "admin-pie-charts",
        "admin-bar-charts",
        "admin-line-charts",
      ]);
    }
  };
export const reduceStock =async (orderItems:OrderItemType[])=>{
    for(let i=0;i<orderItems.length;i++){
         const order=orderItems[i];
         const product=await Product.findById(order.productId);
         if(!product) throw new Error("product not found");
         product.stock-=order.quantity;
    }

}

