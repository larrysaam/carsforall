import './article.css'
import left from '../../assets/left.png'
import right from '../../assets/right.png'
import { useState, useEffect } from 'react'

const ImageSlider = ({images})=>{
    const api_url = process.env.REACT_APP_API_URL
    const img_url = process.env.REACT_APP_IMG_URL

    useEffect(()=>{

    },[])


    const [current, setCurrent] = useState(0);
    const length = images.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(images) || images.length <= 0) {
        return null;
    }


    // const slideLeft=()=>{
    //     setImage(images[i--])

    //     if(i >= 0){
    //         setI(i--)
    //     }else{
    //         setI(images.length -1)
    //         setImage(images[images.length -1])
    //     }

    //     console.log(i--)

    // }

    // const slideRight=()=>{
    //     if(i<0){
           
    //     }else{
    //         setImage(images[i++])

    //     }

    //     if(i <=images.length){
    //         setI(i++)
    //     }else{
    //         setI(0)
    //     }
        
    //     console.log(i++)
    // }

    return(
        <div className='slider_main'>
            <div className='slider_div'>
                <button onClick={()=>prevSlide()} id='side_btn_left'>  <img src={left} alt='.' id='side_icon'/> </button>
                {
                    images.map((image, index)=>{
                        return(
                            <div>
                                { (index === current) && <img src={img_url+image} alt={img_url+image} id='main_vehicle_img'/>}
                            </div>
                        )
                    })
                }
                <button onClick={()=>nextSlide()} id='side_btn_right'> <img src={right} alt='.' id='side_icon'/> </button>
            </div>
            <div className='small_image_div'>
                {images.map((img, index)=>{
                    return(
                        <img src={img_url+img} alt={img_url+img[index]} id='small_image'/>
                    )
                })}
                </div>
            <h2>{current+1}/{images.length}</h2>
        </div>
    )
}

export default ImageSlider