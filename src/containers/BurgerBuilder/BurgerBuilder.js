import React , {Component} from 'react' ;
import Auxi from '../../HOC/Auxi';
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component {
    render(){
        return (
            <Auxi>
                <div>
                    <Burger />
                </div>
                <div>
                    Burger Controls
                </div>

            </Auxi>
        )
    }
}


export default BurgerBuilder ;