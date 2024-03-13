import './edit.css'
import { useState, useEffect } from 'react'
import axios from 'axios'


const Edit =({edit, setEdit})=>{

    const api_url = process.env.REACT_APP_API_URL
    const img_url = process.env.REACT_APP_IMG_URL
    
    const imageArray = []
    const [images, setImages] = useState([])
    const [urlImages, setURLImages] = useState([])
    const [edit_Length, setEdit_Length] = useState(null)

    const [id, setId] = useState('')
    const [made, setMade] = useState('')
    const [model, setModel] = useState('')
    const [price, setPrice] = useState('')
    const [age, setAge] = useState('')
    const [location, setLocation] = useState('')
    const [fuel, setFuel] = useState('')
    const [transmition, setTransmition] = useState('')
    const [ac, setAc] = useState('')
    const [reverse_camera, setReverse_camera] = useState('')
    const [description, setDescription] = useState('')
    const [owner, setOwner] = useState('')
    const [tel, setTel] = useState('')


    useEffect(()=>{
        var edit_Length = Object.keys(edit).length
        setEdit_Length(edit_Length)
        if(edit_Length > 0){

            setId(edit._id)
            setMade(edit.made)
            setModel(edit.model)

            setImages(edit.images)
            
            setPrice(edit.price)
            setAge(edit.age)
            setLocation(edit.location)
            setFuel(edit.fuel)
            setTransmition(edit.transmition)
            setAc(edit.ac)
            setReverse_camera(edit.reverse_camera)
            setDescription(edit.description)
            setOwner(edit.owner)
            setTel(edit.tel)
        }else{

        }
        
    },[edit, images])

    

    const handleClick = async()=>{
        console.log(edit)


        var bodyFormData = new FormData();
        bodyFormData.append('made', made);
        bodyFormData.append('model', model); 
        bodyFormData.append('price', price);
        bodyFormData.append('location', location);
        bodyFormData.append('age', age);
        bodyFormData.append('description', description);
        bodyFormData.append('fuel', fuel); 
        bodyFormData.append('ac', ac);
        bodyFormData.append('reverse_camera', reverse_camera);
        bodyFormData.append('transmition', transmition);
        bodyFormData.append('owner', owner);
        bodyFormData.append('tel', tel);
        console.log(edit_Length)

        if(edit_Length > 0){
            console.log(id)
            console.log(fuel)

            //code
            await axios.patch(api_url,
                {id, made, model, price, age, location, fuel, transmition, ac, reverse_camera, description, owner, tel},
                {headers: {'Content-Type': 'application/json' }}
            ).then((response) => {
                // Code
                console.log(response)
                alert("edit done")
            }).catch((error) => {
                // Code
                console.log(error)
            })  
            console.log(edit_Length)

        }else{
            //code   
            console.log(urlImages)
            for(const file of urlImages){
                bodyFormData.append('images', file);
            }
            
            await axios({
                method: "post",
                url: api_url,
                data: bodyFormData,
                headers: { "Content-Type": "multipart/form-data" }}
            ).then((response) => {
                // Code
                console.log(response)
                alert("added successfuly")
            }).catch((error) => {
                // Code
                console.log(error)
            })  
        }
        setEdit({})
    }

    const handleFile1 =(e)=>{
        e.preventDefault()
        var len = e.target.files.length
        for(var i = 0; i<len; i++){
            imageArray.push(e.target.files[i])
        }   
        setURLImages(imageArray)
    }


    return(
        <div className='main_edit_container'>
            {/* images of vehicle */}
            <div className='edit_image_container'>
                {((edit_Length > 0))? 
                
                images.map(img =>{
                    return(<img src={img} alt={img} id='edit_image'/>)
                })
                : 
                urlImages.map(img =>{
                    return(<img src={URL.createObjectURL(img)} alt={URL.createObjectURL(img)} id='edit_image'/>)
                })

                }

                <input type="file" name="images" className='file_btn'  onChange={(e)=>handleFile1(e)} multiple/>
                    
                {/* save button visible if edit data is available */}
                {(edit_Length>0)? <button className='save_btn'>Save Edit</button> : null }
                
                
            </div>

            {/* vehicle detail fields */}
            <div className='fields_div'>
                <input type="text" value={made} placeholder="made" onChange={(e)=>setMade(e.target.value)}/>
                <input type="text" value={model} placeholder="model" onChange={(e)=>setModel(e.target.value)} />
                <input type="text" value={price} placeholder="price"  onChange={(e)=>setPrice(e.target.value)}/>
                <input type="text" value={age} placeholder="age" onChange={(e)=>setAge(e.target.value)} />
                <input type="text" value={location} placeholder="location" onChange={(e)=>setLocation(e.target.value)} />
                <input type="text" value={fuel} placeholder="fuel"  onChange={(e)=>setFuel(e.target.value)}/>
                <input type="text" value={transmition} placeholder="transmition"  onChange={(e)=>setTransmition(e.target.value)}/>
                <input type="text" value={ac} placeholder="AC"  onChange={(e)=>setAc(e.target.value)}/>
                <input type="text" value={reverse_camera} placeholder="reverse_camera"  onChange={(e)=>setReverse_camera(e.target.value)}/>
                <input type="text" value={description} placeholder="description"  onChange={(e)=>setDescription(e.target.value)}/>
                <input type="text" value={owner} placeholder="owner"  onChange={(e)=>setOwner(e.target.value)}/>
                <input type="text" value={tel} placeholder="tel"  onChange={(e)=>setTel(e.target.value)}/>
                <button className='save_btn' onClick={()=>handleClick()}>{(edit_Length>0)? "Edit" : "Add"}</button>
            </div>
        </div>
    )
}

export default Edit