import {useState, useEffect} from 'react';
import logo from '../../assets/whatsapp.png'
import ImageSlider from './imageSlider';
import { useLocation } from 'react-router-dom';

const Article = ()=>{

    const {state} = useLocation()

    const [data, setData] = useState([])


    return(
        <div className='article_main_div'>
            <ImageSlider images={state.data.images}/>
            <div className='article_details'>
                <h2 className='article_name'> {state.data.made} {state.data.model}</h2>
                <h3 className='article_price'>Price : <span>{state.data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span></h3>
                <div className='article_ul'>
                <ul>
                    <li><b>Emplacement</b> :   {state.data.location}</li>
                    <li><b>Carburant</b> : {state.data.fuel}</li>
                    <li> <b>Transmission</b>:   {state.data.transmition}</li>
                    <li><b>Clime</b> :  { state.data.ac}</li>
                    <li><b>Camera arriere</b> :     {state.data.reverse_camera}</li>
                    <li><b>Description</b> :    {state.data.description}</li>
                    <li> <b>Age</b> :   {state.data.age}</li>
                </ul>
                </div>
                
                <button className='whatsapp_btn_1' onClick={()=>{window.location.href = 'https://wa.link/70d550'}}><img src={logo} alt='.' id='whatsapp_icon'/> Whatsapp</button>
            </div>
        </div>
    )
}

export default Article