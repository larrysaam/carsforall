import {useState, useEffect} from 'react';
import logo from '../../assets/whatsapp.png'
import ac from '../../assets/ac.png'
import map from '../../assets/map.jpg'
import gear from '../../assets/gear.png'
import camera from '../../assets/camera.gif'
import gas from '../../assets/gas.png'
import calenda from '../../assets/calenda.png'


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
                <h3 className='article_price'>Price : <span>{state.data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span> <b> FCFA</b></h3>
                <div className='article_ul'>
                <ul>
                    <li><img src={map} alt='' id='article_icons' /><b>Emplacement</b> :   {state.data.location}</li>
                    <li><img src={gas} alt='' id='article_icons' /><b>Carburant</b> : {state.data.fuel}</li>
                    <li><img src={gear} alt='' id='article_icons' /> <b>Transm</b>:   {state.data.transmition}</li>
                    <li><img src={ac} alt='' id='article_icons' /><b>Clime</b> :  { state.data.ac}</li>
                    <li><img src={camera} alt='' id='article_icons' /><b>Camera arriere</b> :     {state.data.reverse_camera}</li>
                    <li><img src={calenda} alt='' id='article_icons' /> <b>Age</b> :   {state.data.age}</li>
                    <li><b>Description</b> :    {state.data.description}</li>
                </ul>
                </div>
                
                <button className='whatsapp_btn_1' onClick={()=>{window.location.href = 'https://wa.link/70d550'}}><img src={logo} alt='.' id='whatsapp_icon'/> Whatsapp</button>
            </div>
        </div>
    )
}

export default Article