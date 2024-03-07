import './article.css'
import { useState, useEffect } from 'react'

const ImageSlider = ({images})=>{

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
                <img src={"http://localhost:5000/"+image} alt={"http://localhost:5000/"+image} id='main_vehicle_img'/>
                <button onClick={()=>slideRight()}> Right </button>
            </div>
            <div className='small_image_div'>
                <img src={"http://localhost:5000/"+images[1]} alt='small' id='small_image'/>
                <img src={"http://localhost:5000/"+images[2]} alt='small' id='small_image'/>
            </div>
            <h2>1/5</h2>
        </div>
    )
}

export default ImageSlider