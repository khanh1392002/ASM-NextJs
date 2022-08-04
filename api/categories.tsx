import { CateType } from "../type/categories"
import instance from "./config"

export const getall = (url:string) =>{
    return instance.get(url)
}
export const getone = (id:string) =>{
    return instance.get(`/categorys/${id}`)
}
export const removect = (id:string) =>{
    return instance.delete(`/category/${id}`)
}
export const addct = (cate:CateType) =>{
    return instance.post('/categorys',cate)
}
export const updatecate = (cate:CateType) =>{
    return instance.put(`/category/${cate._id}/edit`,cate)
}