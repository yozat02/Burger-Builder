import React from 'react' ;
import Auxi from "../../../HOC/Auxi"


const OrderSummury =(props) => {
    const ingredientsSummary = Object.keys(props.ingredients).map(key => {
    return (
    <li key={key} >
        <span style={{textTransform: "capitalize"}} >{key}</span> : {props.ingredients[key]}
    </li>)
    })
    return (
        <Auxi>
            <h3>Your Order</h3>
            <p>A delicious Burger with the following ingredients: </p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p>Continue to checkout?</p>
        </Auxi>

    )
}


export default OrderSummury ;