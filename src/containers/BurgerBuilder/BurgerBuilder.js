import React , {Component} from 'react' ;
import Auxi from '../../HOC/Auxi';
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component {
    state = {
        ingredients : {
            salad :1,
            bacon :1,
            meat:2,
            cheese:2
        }
    }
    render(){
        return (
            <Auxi>
                <div>
                    <Burger ingredients={this.state.ingredients}/>
                </div>
                <div>
                    Burger Controls
                </div>

            </Auxi>
        )
    }
}


export default BurgerBuilder ;