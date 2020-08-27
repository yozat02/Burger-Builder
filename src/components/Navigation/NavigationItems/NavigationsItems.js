import React from 'react';
import classes from './NavigationsItems.css';
import NavigationsItem from "./Navigationsitem/NavigationsItem"



const NavigationItems = (props) => (
    <ul className={classes.NavigationsItems} >
        <NavigationsItem link="/" active>Burger Builder</NavigationsItem>
        <NavigationsItem link="/" >Checkout</NavigationsItem>
    </ul>
)

export default NavigationItems ;