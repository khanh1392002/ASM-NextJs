
import { User } from "../type/user";
import instance from "./config";

export const signup = (user: User) => {
    return instance.post('/signup', user)
}
export const signin = (user: User) => {
    return instance.post('/signin', user)
}
export const listuser = (url:string)=>{
    return instance.get(url)
}
export const removeuser = (id:string)=>{
    return instance.delete(`/users/${id}`)
}
export const adduser = (user:User) =>{
    return instance.post(`/user`,user)
}
export const updateuser = (user:User) =>{
    return instance.put(`/user/${user._id}`,user)
}