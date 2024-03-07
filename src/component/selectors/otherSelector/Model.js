import './selector.css'
import { useState, useEffect } from 'react'

const Model = ({setVehicleModel})=>{

    const [model, setModel] = useState('All')

    return(
        <div className='Model_selector'>
            <label for='car_type'>Model: </label>
            <select id='car_type' onChange={(e)=>{setModel(e.target.value); setVehicleModel(e.target.value)}}>
                <option value="All">All</option>
                <option value="Yaris">Yaris</option>
                <option value="Runx">Runx</option>
                <option value="Hignlander">Hignlander</option>
                <option value="Fortuner">Fortuner</option>
            </select>
        </div>
    )
}

export default Model