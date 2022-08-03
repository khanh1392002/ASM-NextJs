import { url } from "inspector";
import useSWR from "swr";
import { list } from "../api/products";


const useProduct = () =>{
    const fetcher = async (url:string)=>{
         const {data} = await list(url)
         return data
    }
    const {data,error,mutate} = useSWR('/Products',fetcher,{dedupingInterval:3000})
    return{
        data,
        error,
        mutate
    }
}
export default useProduct