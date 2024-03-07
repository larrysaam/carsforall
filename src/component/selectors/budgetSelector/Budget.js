import "./budget.css"
import {useState} from 'react';

const Budget = ({setVehiclePrice})=>{

    const [price, setPrice] = useState(1000000)

    return(
        <div className="price_range_div">
            <h3>Max Budget : <span className="price_value">{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span></h3>
            <input type="range" min="100000" max="20000000" step="50000" id="price_range" value={price} onChange={(e)=>{setPrice(e.target.value); setVehiclePrice(e.target.value)}}/>
        </div>
    )
}

export default Budget