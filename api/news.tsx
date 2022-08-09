import { TypeNews } from "../type/news"
import instance from "./config"

export const getall = (url:string) =>{
    return instance.get(url)
}
export const getone = (id:string) =>{
    return instance.get(`/news/${id}`)
}
export const remove = (id:string) =>{
    return instance.delete(`/news/${id}`)
}
export const add = (cate:TypeNews) =>{
    return instance.post('/news',cate)
}
export const update = (cate:TypeNews) =>{
    return instance.put(`/news/${cate._id}/edit`,cate)
}