import './selector.css'
import { useState, useEffect } from 'react'

const Location = ({setVehicleLocation})=>{

    const [location, setLocation] = useState('Yaounde')

    return(
        <div className='location_selector'>
            <label for='region'>Location: </label>
            <select id='region' onChange={(e)=>{setLocation(e.target.value); setVehicleLocation(e.target.value)}}>
                <option value="Yaounde">Yaounde</option>
                <option value="Douala">Douala</option>
                <option value="Ngoundere">Ngoundere</option>
                <option value="Buea">Buea</option>
                <option value="Bamenda">Bamenda</option>
            </select>
        </div>
    )
}

export default Location