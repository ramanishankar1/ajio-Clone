import { useEffect, useState } from "react";
import Cartitem from "../Cart/cartitem";
import { useContext } from "react";
import { mycontext } from "../Context Folder/Context";
function Cartholder() {
    const cartList=useContext(mycontext).cartList
   
    return (

        <div className="cartHolder">
            <div className="container">
                <div className="cartholderWrapper">
                
{

        cartList.map((item)=>{
            return <Cartitem key={item.id} name={item.name} price={item.price} category={item.category} img={item.img}></Cartitem>

        })
            
        

}
        </div>

            </div>

        </div>
    )


}

export default Cartholder;