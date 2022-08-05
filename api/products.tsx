import { url } from "inspector";
import { Iproduct } from "../type/products";
import instance from "./config";

export const list = (url:string)=>{
    return instance.get(url)
}
export const removepd = (id:string)=>{
    return instance.delete(`/products/${id}`)
}
export const addproduct = (product:Iproduct) =>{
    return instance.post(`/products`,product)
}
export const updatepd = (product:Iproduct) =>{
    return instance.put(`/products/${product._id}`,product)
}