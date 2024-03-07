import '../home.css'
import search_logo from '../../assets/search.png'
import Header from "../../component/header/header"
import Budget from "../../component/selectors/budgetSelector/Budget"
import Location from '../../component/selectors/otherSelector/Location'
import Model from '../../component/selectors/otherSelector/Model'
import Item from '../../component/adminBoard/item/index'
import { useState } from 'react'

const AdminHome = ({setEdit})=>{
    const [search, setSearch] = useState('')
    const [location, setLocation] = useState('Yaounde')
    const [model, setModel] = useState('All')
    const [price, setPrice] = useState(1000000)


    return(
        <div className="body_container">
            <div className='home_container'>
                <div className='sidebar'>
                    <div className='filter_price'>
                        <h3>Search</h3>
                        <button className='apply_btn' >Apply</button>
                    </div>
                    <div className='search_div'>
                        <input type='text' name='search' value={search} onChange={(e)=>setSearch(e.target.value)} id='search_input'/>
                        <img src={search_logo} alt='search' className='search_btn_mobile' />
                    </div>
                    <div className='filter_price'>
                        <h3>Filter by price</h3>
                    </div>
                    <div className='top_mobile-bar'>
                        <div className='search_div_2'>
                            <input type='text' name='search' value={search} onChange={(e)=>setSearch(e.target.value)} id='search_input'/>
                            <img src={search_logo} alt='search' className='search_btn_mobile' />
                            {/* <button className='search_btn'>O</button> */}
                        </div>
                        <div className='top_options'>
                            <Budget setVehiclePrice={setPrice}/>
                            <div className='filter_price'>
                                <h3>Filter by Location</h3>
                            </div>
                            <Location setVehicleLocation={setLocation}/>
                            <div className='filter_price'>
                                <h3>Filter by Model</h3>
                            </div>
                            <Model  setVehicleModel={setModel}/>
                        </div>
                    </div>
                    
                </div>
                
                <div className='item_div_main'>
                    <Item price={price} model={model} location={location} search={search} setEdit={setEdit}/>
                </div>
            </div>
        </div>
    )
}

export default AdminHome