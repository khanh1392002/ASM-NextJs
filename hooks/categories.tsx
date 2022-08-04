import useSWR from "swr"
import { addct, getall } from "../api/categories"
import { CateType } from "../type/categories"

const usercategories = () =>{
    const fetcher = async (url:string)=>{
        const {data} = await getall(url)
        return data
    } 
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {data,error,mutate} = useSWR('/categorys',fetcher,{dedupingInterval:3000})

    const creatct = async (item:CateType) =>{
        const {data : cate} = await addct(item)
        return [...data, cate]
    }
    return{
        data,
        error,
        mutate,
        creatct
    }
}

export default usercategories