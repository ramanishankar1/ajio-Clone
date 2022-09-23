import { useEffect } from 'react';
import './productholder.css';
import { useState } from 'react';
import Product from './product';
import { Outlet } from "react-router-dom"

function Productholder() {
    // const product =useParams()


    const [dresses, setDress] = useState([])
    useEffect(() => {
        fetch('https://6314d6bcfa82b738f74f45fd.mockapi.io/dress').then((response) => {
            if (response.ok) {
                return response.json()
            } else {
                return false
            }
        }).then((data) => {
            setDress([...data])
            // console.log(dresses);
        })
    }, [])

    setTimeout(() => {
        console.log(dresses);
    }, 2000)

    return (
        <div className="Product-Holder">
            <div className="container">
                <Outlet/>

                <div className="productholderWrapper">{
                    dresses.map((dress) => {
                        return <Product key={dress.id} id={dress.id} name={dress.name} price={dress.price} img={dress.img} category={dress.category} item={dress}></Product>
                    })
                }
                    {/* <h4> {dress} </h4> */}
                </div>
            </div>
        </div>
    )


}
export default Productholder;