import toast from "react-hot-toast"
import { apiConnector } from "../apiConnector"
import { instructorEndpoints } from "../apis"

export const statApi=async(token)=>{
    let result=[]
    const toastId=toast.loading("Loading")
    try{
        const response=await apiConnector("GET",instructorEndpoints.GET_STAT_INTRUCTOR,null,
            {
                Authorization: `Bearer ${token}`
            }) 
            if(!response?.data?.success){
                toast.error("Error to connect with Server")
                throw new Error(response.data.error)
            }
            result=response?.data?.courseData
          
        // console.log("This is the data of the statApi ",response)
         toast.dismiss(toastId)
         return result
    }
    catch(err){
        console.log("API ERROR............", err)
    toast.error(err.message)
    }
    toast.dismiss(toastId)
    return result
}