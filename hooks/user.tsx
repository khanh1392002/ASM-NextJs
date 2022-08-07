/* eslint-disable react-hooks/rules-of-hooks */
import useSWR from "swr";
import { adduser, listuser, removeuser, signin, signup } from "../api/user";
import { User } from "../type/user";

const userpertion = () => {
    const signupuser = async (user:User) => {
        const {data} = await signup(user)
    }
    const signinuser = async (user:User) => {
        const {data: item} = await signin(user)
        return {item}
    }
    const fetcher = async (url:string)=>{
        const {data} = await listuser(url)
        return data
   }
    const {data,error,mutate} = useSWR('/user',fetcher,{dedupingInterval:3000})
    const creatuser = async (item: User) =>{
        const {data : user} = await adduser(item)
        return [...data, user]
    } 
    const removeusers = async (id:string) =>{
        await removeuser(id)
       mutate(data.filter(item => item._id !== id))
   }
    return{
        data,
        error,
        signupuser,
        signinuser,
        mutate,
        creatuser,
        removeusers
    }
}
export default userpertion