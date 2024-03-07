import './posts.css'
import Post from './posts'
import { useState, useEffect } from 'react'
import useFetchVehicle from '../../../hook/useFetchVehicles'

const Item = ({price, model, location, search , setEdit})=>{

    const {response, loading, error} = useFetchVehicle('http://localhost:5000/vehicle')
    const [data, setData] = useState([])

    useEffect(()=>{
        console.log(response)
        console.log(price)
        console.log(location)
        console.log(model)
        if(model === "All"){
            const newdata = response.filter(item =>( parseInt(item.price) <= price)  && item.location === location)
            setData(newdata)
        }else{
            const newdata = response.filter(item => ( parseInt(item.price) <= price)  && item.model === model && item.location === location)
            setData(newdata)
        }
        console.log(data)
    },[response, price, model, location, search])


    return(
        <div className="main">
            {error && <p>Error Occured!</p>}
            {loading && <p>Loading...</p>}
            {response &&
                data.map((vehicle, index)=>{
                    return(<Post data={vehicle} made={vehicle.made} model={vehicle.model} images={vehicle.images} price={vehicle.price} age={vehicle.age} setEdit={setEdit} key={index}/>)
                })
            }
        </div>
    )
}

export default Item