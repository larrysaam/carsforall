import './posts.css'
import seeicon from '../../assets/view.png'
import logo from '../../assets/whatsapp.png'
import { useNavigate } from 'react-router-dom'

const Post = ({data, made, model, images, price, age})=>{

    const navigate = useNavigate()

    return(
        <div className='post_div'>
            <div className='item_list_header'>
                <h3>{made} {model}</h3>
            </div>
            <div>
                <img
                    src={"http://localhost:5000/"+images[0]} 
                    alt={images[0]} 
                    id='item_image' 
                />
            </div>
            <div className='item_list_details'>
                <h4>Price: <span>{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span></h4>
                <div className='details_ul_div'>
                        <p> <b>Model: </b> {model}</p>
                        <p> <b>Years: </b> {age}</p>
                </div>
                <div className='btn_div'>
                    <button className='whatsapp_btn'  onClick={()=>{window.location.href = 'https://wa.link/70d550'}}><img src={logo} alt='.' id='whatsapp_icon'/>  Whatsapp </button>
                    <button className='see_btn' onClick={()=>navigate('/article', {state: {data}})}><img src={seeicon} alt='.' className='see_more_img'/> See More </button>
                </div>
            </div>
        </div>
    )
}


export default Post