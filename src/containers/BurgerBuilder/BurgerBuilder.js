import React , {Component} from 'react' ;
import Auxi from '../../HOC/Auxi';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from "../../components/UI/Modal/Modal";
import  OrderSummury from "../../components/Burger/OrderSummury/OrderSummury";

const INGREDIENTS_PRICE ={
    salad : 0.6,
    cheese: 0.5,
    bacon: 0.9,
    meat:1.4
}
class BurgerBuilder extends Component {
    state = {
        ingredients :  {
            salad :0,
            bacon :0,
            meat:0,
            cheese:0
        },
        totalePrice : 4,
        purchasable : false,
        purchasing : false
    }
    updatePurchaseState =(ingredients) => {
        const sum = Object.keys(ingredients).map(key => {
            return ingredients[key]
        }).reduce((sum,el)=>{
            return sum+el
        },0);
        this.setState({
            purchasable: sum > 0 
        })
        
    }
    addIngredient = (type) => {
        const updatedIngrendients = {
            ...this.state.ingredients
        };
        updatedIngrendients[type] = this.state.ingredients[type] +1 ;
        let newPrice = this.state.totalePrice + INGREDIENTS_PRICE[type] ;
        this.setState({
            ingredients: updatedIngrendients,
            totalePrice:newPrice
        })
        this.updatePurchaseState(updatedIngrendients)
    }
    removeIngredient = (type) => {
        const updatedIngrendients = {
            ...this.state.ingredients
        };
        if(this.state.ingredients[type] > 0 ){
            updatedIngrendients[type] = this.state.ingredients[type] -1 ;
            let newPrice = this.state.totalePrice - INGREDIENTS_PRICE[type] ;
            this.setState({
                ingredients: updatedIngrendients,
                totalePrice:newPrice
            })
            this.updatePurchaseState(updatedIngrendients)
        }
        else return;
    }
    purchaseHandler = () => {
        this.setState({purchasing: true})
    }
    ModalClosedHandler = () => {
        this.setState({purchasing: false})
    }
    PurchaseContinueHandler =() => {
        alert("Continue")
    }
    render(){
        const disableInfo ={
            ...this.state.ingredients
        }
        for (let key in disableInfo){
            disableInfo[key] = disableInfo[key] <=0 
        }
        return (
            <Auxi>
                <Modal show={this.state.purchasing} ModalClosed={this.ModalClosedHandler} >
                    <OrderSummury 
                        ingredients={this.state.ingredients}
                        price={this.state.totalePrice}
                        clickedClose={this.ModalClosedHandler}
                        clickedContinue={this.PurchaseContinueHandler}  
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    addNewIngedient={this.addIngredient}
                    removeIngredient={this.removeIngredient}
                    disabled={disableInfo}
                    price={this.state.totalePrice}
                    purchasable={this.state.purchasable}
                    purchaseHandler={this.purchaseHandler}
                />
            </Auxi>
        )
    }
}


export default BurgerBuilder ;