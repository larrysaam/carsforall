import './posts.css'
import seeicon from '../../assets/view.png'
import logo from '../../assets/whatsapp.png'
import { useNavigate } from 'react-router-dom'

const Post = ({data, made, model, images, price, age})=>{

    const img_url = process.env.REACT_APP_IMG_URL
    const navigate = useNavigate()

    return(
        <div className='post_div'>
            <div className='item_list_header'>
                <h3>{made} {model}</h3>
            </div>
            <div>
                <img
                    src={img_url+images[0]} 
                    alt={img_url+images[0]} 
                    id='item_image' 
                />
            </div>
            <div className='item_list_details'>
                <h4>Prix: <span>{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span></h4>
                <div className='details_ul_div'>
                        <p> <b>Model: </b> {model}</p>
                        <p> <b>age: </b> {age}</p>
                </div>
                <div className='btn_div'>
                    <button className='whatsapp_btn'  onClick={()=>{window.location.href = 'https://wa.link/70d550'}}><img src={logo} alt='.' id='whatsapp_icon'/>  Whatsapp </button>
                    <button className='see_btn' onClick={()=>navigate('/article', {state: {data}})}><img src={seeicon} alt='.' className='see_more_img'/> Voir </button>
                </div>
            </div>
        </div>
    )
}


export default Post