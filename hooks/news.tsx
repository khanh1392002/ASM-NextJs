import { url } from "inspector";
import useSWR from "swr";
import { getall, remove, add, update } from "../api/news";
import { TypeNews } from "../type/news";


const useNews = () =>{
    const fetcher = async (url:string)=>{
         const {data} = await getall(url)
         return data
    }
    const {data,error,mutate} = useSWR('/news',fetcher,{dedupingInterval:3000})
    const creat = async (item: TypeNews) =>{
        const {data : news} = await add(item)
        return [...data, news]
    } 
    const removeNews = async (id:string) =>{
        await remove(id)
       mutate(data.filter(item => item._id !== id))
   }
    return{
        data,
        error,
        mutate,
        creat,
        removeNews
    }
}
export default useNews