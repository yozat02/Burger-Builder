import React from 'react' ;
import Auxi from "../../../HOC/Auxi"
import Button from "../../UI/Button/Button"

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
            <p><strong>Total price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button clicked={props.clickedClose} btnType='Danger' >CANCEL</Button>
            <Button clicked={props.clickedContinue} btnType='Success' >CONTINUE</Button>
        </Auxi>

    )
}


export default OrderSummury ;