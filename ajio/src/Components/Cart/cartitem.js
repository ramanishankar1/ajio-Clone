

function Cartitem(props) {

    return (
        <div className="cartItem">
            <div className="container">
                <img src={props.img} ></img>
                <div className="name">Name: {props.name}</div>
                <div className="category">Category: {props.category}</div>
                <div className="price">Price: Rs.{props.price}</div>

            </div>

        </div>

    )


}

export default Cartitem;