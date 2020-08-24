import React from 'react' ;
import Auxi from '../../HOC/Auxi';
import classes from "./Layout.css"
const Layout = (props) => (
    <Auxi>
        <div>Toolbar, sidebar ,Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Auxi>
)


export default Layout ;