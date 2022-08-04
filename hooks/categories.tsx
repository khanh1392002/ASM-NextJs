import useSWR from "swr"
import { addct, getall, removect } from "../api/categories"
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
        mutate ([...data, cate])
    }
    const removehct = async (id:string) =>{
         await removect(id)
        mutate(data.filter(item => item._id !== id))
    }
    return{
        data,
        error,
        mutate,
        creatct,
        removehct
    }
}

export default usercategories