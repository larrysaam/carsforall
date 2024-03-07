import { useState, useEffect } from "react"

const useFetchVehicle = (url)=>{

    const [response, setResponse] = useState([])
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)

    useEffect(()=>{
        fetchdata()
    },[])


    const fetchdata = async()=>{
        try {
            setLoading(true)
            const res = await fetch(url)
            const data = await res.json()
            setResponse(data.data)
            setLoading(false)
        } catch (error) {
            setError(error)
            setLoading(false)
        }finally{
            setLoading(false)
        }
        
    }

    return {response, loading, error}
}

export default useFetchVehicle