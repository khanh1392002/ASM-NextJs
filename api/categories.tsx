import instance from "./config"

export const getall = (url:string) =>{
    return instance.get(url)
}