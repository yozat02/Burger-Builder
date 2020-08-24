import React , {Component} from 'react' ;
import Auxi from '../../HOC/Auxi';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

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
        totalePrice : 4
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
        }
        else return;
        
    }

    render(){
        return (
            <Auxi>
                <div>
                    <Burger ingredients={this.state.ingredients}/>
                </div>
                <div>
                    <BuildControls 
                        addNewIngedient={this.addIngredient}
                        removeIngredient={this.removeIngredient}
                    />
                </div>

            </Auxi>
        )
    }
}


export default BurgerBuilder ;