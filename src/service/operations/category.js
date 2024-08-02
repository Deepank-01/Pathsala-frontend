import toast from "react-hot-toast"
import { apiConnector } from "../apiConnector"
import { catalogData } from "../apis"
import { Categories } from "../apis"
export const getcategoryDetail=async(data)=>{
const toastId=toast.loading("Loading the Data")
let result={}
try{
const response= await apiConnector("POST",catalogData.CATALOGPAGEDATA_API,data)
console.log(response)
if(!response?.data?.success) {
    // toast.error(response?.data?.message)
    throw new Error(response?.data?.message);
}
result=response?.data
toast.success(response?.data?.message)
toast.dismiss(toastId)
return result

}
catch(error){
    console.log("GET_ALL_COURSE_API API ERROR............", error)
    toast.error(error.message)
}
toast.dismiss(toastId)
}
export const createCategory=async(data,token)=>{
    const toast_id=toast.loading("Loading")
    
try{
   const response=await  apiConnector("POST",Categories.CATEGORIES_CREATE,data,{
    Authorization: `Bearer ${token}`,
   })
   if(!response?.data?.success){
    toast.error(response?.data?.message)
    throw new Error("Could Not Add Category")
   }
   toast.success("Added the Category")
}
catch(err){
    console.log("ERROR in the api  to create cateogry",err.message)
    toast.error(err.message)
}
toast.dismiss(toast_id)
}