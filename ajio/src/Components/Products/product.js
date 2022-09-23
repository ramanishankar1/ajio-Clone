import { useContext, useState } from 'react';
import './product.css'
import { useNavigate } from 'react-router-dom';
import { mycontext } from '../Context Folder/Context';

function Product(props){
const [price,setOffer]=useState(props.price)
const applyOffer=()=>{
        setOffer(price/2)
}
const navigateTo=useNavigate()
const addtocart=useContext(mycontext).addtocart


return (
                                                                                                                                                                                                                                                                               
        <div className="dressProducts">
       {/* <div className='dressDetails'></div> */}
       <img src={props.img} ></img>       
       <div className="name">Name: {props.name}</div>
        <div className="category">Category: {props.category}</div>
        <div className="price">Price: Rs.{props.price}</div>
        <button className="applyoffer" onClick={applyOffer}>ApplyOffer</button>
        <button onClick={()=>{
              navigateTo('/description/'+props.id)  
        }}>ShowDress </button>
        <button onClick={()=>{

              addtocart(props.item)  
        }}>AddtoCart</button>
        </div>
    
    
)

}
export default Product;