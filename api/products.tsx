import { url } from "inspector";
import instance from "./config";

export const list = (url:string)=>{
    return instance.get(url)
}
export const removepd = (id:string)=>{
    return instance.delete(`/products/${id}`)
}