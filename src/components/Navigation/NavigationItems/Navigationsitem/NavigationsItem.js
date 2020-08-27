import React from 'react';
import classes from './NavigationsItem.css'



const NavigationsItem = (props) => (
    <li className={classes.NavigationsItem}>
        <a 
        href={props.link}
        className={props.active ? classes.active : null}
        >{props.children}</a>
    </li>
)

export default NavigationsItem ;