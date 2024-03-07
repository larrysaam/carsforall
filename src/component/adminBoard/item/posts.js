import '../../item/posts.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Item = ({data, made, model, images, price, tel, setEdit})=>{
    
    const api_url = process.env.REACT_APP_API_URL
    const img_url = process.env.REACT_APP_IMG_URL

    const navigate = useNavigate()

    const handleEdit =()=>{
        setEdit(data)
        navigate('/edit')
    }

    const handledelete =async()=>{
        await axios.delete(`${api_url}${data._id}`)
        .then(res=>{
            alert("deleted successfuly")
        })
        .catch(err=>{

        })
    }

    return(
        <div className='post_div'>
            <div className='item_list_header'>
                <h3>{made} {model}</h3>
            </div>
            <div>
                <img
                    src={img_url + images[0]} 
                    alt={images[0]}
                    id='item_image'
                />
            </div>
            <div className='item_list_details'>
                <h4>Price: <span>{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span></h4>
                <div className='details_ul_div'>
                        <p> <b>Model: </b> {model}</p>
                        <p> <b>Tel: </b> {tel}</p>
                </div>
                <div className='admin-btn_div'>
                    <button className='edit_btn' onClick={()=>{handleEdit()}}> Edit </button>
                    <button className='delete_btn' onClick={()=>{handledelete()}}> Delete </button>
                </div>
            </div>
        </div>
    )
}


export default Item



