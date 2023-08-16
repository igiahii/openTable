import axios from "axios";
import { useState } from "react";


export default function UseAvailable (){


    const [loading, setLoading] = useState(false)
    const [data, setData] = useState<{time : string ; available : boolean }[] | null >(null)
    const [error, setError] = useState(null)

    const fetchDataparams = async( {slug , partySize , date , selectedTime} : {slug : string ; partySize : string ; date : string ; selectedTime : string}) =>{
        setLoading(true)
       
        
        try {
            const response = await axios.get(`http://localhost:3000/api/restaurant/${slug}/availability`,{
            params :{
                partySize,
                date,
                selectedTime
            }
        })
        setLoading(false)
        setData(response.data)
        
        
        } catch (error : any) {
            setLoading(false)
            setError(error.response.data.errorMessage)
        
            
        }

    }

    return {
        loading ,
        data,
        error,
        fetchDataparams
    }
}