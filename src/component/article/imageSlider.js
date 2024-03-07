import './article.css'
import left from '../../assets/left.png'
import right from '../../assets/right.png'
import { useState, useEffect } from 'react'

const ImageSlider = ({images})=>{
    const api_url = process.env.REACT_APP_API_URL
    const img_url = process.env.REACT_APP_IMG_URL

    const [image, setImage] = useState('')
    const [imageLen, setImageLen] = useState(null)
    var [i, setI] = useState(0)

    useEffect(()=>{
        setImage(images[0])
        setImageLen(images.length)
        
    },[images])



    const slideLeft=()=>{
        setImage(images[i--])

        if(i >= 0){
            setI(i--)
        }else{
            setI(images.length -1)
            setImage(images[images.length -1])
        }

        console.log(i--)

    }

    const slideRight=()=>{
        if(i<0){
           
        }else{
            setImage(images[i++])

        }

        if(i <=images.length){
            setI(i++)
        }else{
            setI(0)
        }
        
        console.log(i++)
    }

    return(
        <div className='slider_main'>
            <div className='slider_div'>
                <button onClick={()=>slideLeft()} id='side_btn_left'>  <img src={left} alt='.' id='side_icon'/> </button>
                <img src={img_url+image} alt={img_url+image} id='main_vehicle_img'/>
                <button onClick={()=>slideRight()} id='side_btn_right'> <img src={right} alt='.' id='side_icon'/> </button>
            </div>
            <div className='small_image_div'>
                <img src={img_url+images[1]} alt='small' id='small_image'/>
                <img src={img_url+images[2]} alt='small' id='small_image'/>
            </div>
            <h2>{i}/{images.length}</h2>
        </div>
    )
}

export default ImageSlider