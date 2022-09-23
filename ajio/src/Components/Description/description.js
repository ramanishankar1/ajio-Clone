import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {useNavigate}from 'react-router-dom';


function Description(){
    const product=useParams()
     const [dress,setcurrentDress]=useState({})
     const [showImage,setShowImage]=useState(false)  
     const navigate=useNavigate()  
   
    useEffect(()=>{
        
        fetch('https://6314d6bcfa82b738f74f45fd.mockapi.io/dress/'+product.id).then((response)=>{
            
        if(response.ok){    
            return response.json()
        }else{
            return false
        }
    }).then((data)=>{
        // console.log(data);
        setcurrentDress(data)
    })

},[product])   
    
return(

<div className="container">
<div className="imgArea">
<img src={dress.img}></img> 
<div className="textArea">
<div> Name: {dress.name}</div>
<div> Category: {dress.category}</div>
<div> Price: Rs. {dress.price}</div>
</div>
</div>
 
<button onClick={() => {
                    setShowImage(!showImage)
                    navigate(-1)
                }}>clearDress </button>

</div>   

)

}
export default Description;