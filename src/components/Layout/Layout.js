import React,{Component} from 'react' ;
import Auxi from '../../HOC/Auxi';
import classes from "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer"

class Layout extends Component {
    state ={
        showSideDrawer :true
    }
    sideDrawerCloseHandler = () => {
        this.setState({showSideDrawer:false})
    }
    render(){
        return (
            <Auxi>
            <Toolbar />
            <SideDrawer show={this.state.showSideDrawer} closed={this.sideDrawerCloseHandler} /> 
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </Auxi>
        )
    }
}
   



export default Layout ;