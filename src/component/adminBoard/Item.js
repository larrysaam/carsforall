import '../item/posts.css'

// const Item = ({made, model, main_img, price, tel})=>{

//     return(
//         <div className='post_div'>
//             <div className='item_list_header'>
//                 <h3>{made} {model}</h3>
//             </div>
//             <div>
//                 <img
//                     src={main_img} 
//                     alt='item image' 
//                     id='item_image' 
//                 />
//             </div>
//             <div className='item_list_details'>
//                 <h4>Price: <span>{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span></h4>
//                 <div className='details_ul_div'>
//                         <p> <b>Model: </b> {model}</p>
//                         <p> <b>Tel: </b> {tel}</p>
//                 </div>
//                 <button className='whatsapp_btn'> Whatsapp </button>
//             </div>
//         </div>
//     )
// }


// export default Item




const Item = ()=>{

    return(
        <div className='post_div'>
            <div className='item_list_header'>
                <h3>made model</h3>
            </div>
            <div>
                <img
                    src='main_img' 
                    alt='item image' 
                    id='item_image' 
                />
            </div>
            <div className='item_list_details'>
                <h4>Price: <span>2,000,000 CFA</span></h4>
                <div className='details_ul_div'>
                        <p> <b>Model: </b> model</p>
                        <p> <b> tel: 670000000 </b> age</p>
                </div>
                <button className='whatsapp_btn'> Edit </button>
            </div>
        </div>
    )
}


export default Item