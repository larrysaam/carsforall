import './article.css'
import { useState, useEffect } from 'react'

const ImageSlider = ({images})=>{
    const api_url = process.env.REACT_APP_API_URL
    const img_url = process.env.REACT_APP_IMG_URL

    const [image, setImage] = useState('')
    const [imageLen, setImageLen] = useState(null)
    var position = 0

    useEffect(()=>{
        setImage(images[0])
        setImageLen(images.length)
    },[images])



    const slideLeft=()=>{
        position = position-1
        if(position >= 0 ){
            setImage(images[position])
        }else{
            position = imageLen-1
            setImage(images[position])
        }
        console.log(position)

    }

    const slideRight=()=>{
        position = position+1
        if(position < imageLen){
            setImage(images[position])
        }else{
            position = 0
            setImage(images[position])
        }
        console.log(position)
    }

    return(
        <div className='slider_main'>
            <div className='slider_div'>
                <button onClick={()=>slideLeft()}> Left </button>
                <img src={img_url+image} alt={img_url+image} id='main_vehicle_img'/>
                <button onClick={()=>slideRight()}> Right </button>
            </div>
            <div className='small_image_div'>
                <img src={img_url+images[1]} alt='small' id='small_image'/>
                <img src={img_url+images[2]} alt='small' id='small_image'/>
            </div>
            <h2>1/5</h2>
        </div>
    )
}

export default ImageSlider