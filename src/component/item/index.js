import './posts.css'
import Post from './post'
import { useState, useEffect } from 'react'
import useFetchVehicle from '../../hook/useFetchVehicles'

const Item = ({price, model, location, search})=>{

    const api_url = process.env.REACT_APP_API_URL
    const {response, loading, error} = useFetchVehicle(api_url)
    const [data, setData] = useState([])

    useEffect(()=>{
        setData(response)
        if(model === "All"){
            const newdata = response.filter(item =>( parseInt(item.price) <= price)  && item.location === location)
            setData(newdata)
        }else{
            const newdata = response.filter(item => ( parseInt(item.price) <= price)  && item.model === model && item.location === location)
            setData(newdata)
        }

        if(search !== ""){
            const newdata = response.filter(item => item.model.startsWith(search) || item.made.startsWith(search) && ( parseInt(item.price) <= price))
            setData(newdata)
        }
        console.log(data)
    },[response, price, model, location, search])


    return(
        <div className="main">
            {error && <h2>Error Occured!</h2>}
            {loading && <h2>Loading...</h2>}
            {response &&
                data.map((vehicle, index)=>{
                    return(<Post data={vehicle} made={vehicle.made} model={vehicle.model} images={vehicle.images} price={vehicle.price} age={vehicle.age} key={index}/>)
                })
            }
        </div>
    )
}

export default Item