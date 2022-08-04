import { url } from "inspector";
import useSWR from "swr";
import { addproduct, list, removepd } from "../api/products";
import { Iproduct } from "../type/products";


const useProduct = () =>{
    const fetcher = async (url:string)=>{
         const {data} = await list(url)
         return data
    }
    const {data,error,mutate} = useSWR('/Products',fetcher,{dedupingInterval:3000})
    const creat = async (item: Iproduct) =>{
        const {data : product} = await addproduct(item)
        return [...data, product]
    } 
    const removehpd = async (id:string) =>{
        await removepd(id)
       mutate(data.filter(item => item._id !== id))
   }
    return{
        data,
        error,
        mutate,
        creat,
        removehpd
    }
}
export default useProduct