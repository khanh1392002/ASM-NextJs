import useSWR from "swr"
import { getall } from "../api/categories"

const usercategories = () =>{
    const fetcher = async (url:string)=>{
        const {data} = await getall(url)
        return data
    } 
    const {data,error,mutate} = useSWR('/categorys',fetcher,{dedupingInterval:3000})

    return{
        data,
        error,
        mutate
    }
}

export default usercategories