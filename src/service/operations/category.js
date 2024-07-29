import toast from "react-hot-toast"
import { apiConnector } from "../apiConnector"
import { catalogData } from "../apis"


export const getcategoryDetail=async(data)=>{
const toastId=toast.loading("Loading the Data")
let result={}
try{
const response= await apiConnector("POST",catalogData.CATALOGPAGEDATA_API,data)
console.log(response)
if(!response?.data?.success) throw new Error("Could not Fetch Category page data");
result=response?.data
toast.dismiss(toastId)
return result

}
catch(error){
    console.log("GET_ALL_COURSE_API API ERROR............", error)
    toast.error(error.message)
}
toast.dismiss(toastId)
}