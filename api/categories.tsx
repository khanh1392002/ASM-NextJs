import { CateType } from "../type/categories"
import instance from "./config"

export const getall = (url:string) =>{
    return instance.get(url)
}

export const addct = (cate:CateType) =>{
    return instance.post('/categorys',cate)
}