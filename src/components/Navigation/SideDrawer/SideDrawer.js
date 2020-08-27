import React from 'react' ;
import Logo from "../../Logo/Logo"
import NavigationItems from "../NavigationItems/NavigationsItems";
import classes from "./SideDrawer.css"
import BackDrop from "../../UI/BackDrop/Backdrop"
import Auxi from "../../../HOC/Auxi"
const SideDrawer = (props) => {
    // ..
    return (
        <Auxi>
            <BackDrop show={props.show} clicked={props.closed} />
            <div className={[classes.SideDrawer,props.show ? classes.Open :classes.Close].join(" ")}  >
            <div style={{marginBottom : 32,height :"11%"}} >
                <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Auxi>
    )
}

export default SideDrawer;