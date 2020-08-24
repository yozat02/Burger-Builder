import React from 'react' ;
import Auxi from '../../HOC/Auxi'

const Layout = (props) => (
    <Auxi>
        <div>Toolbar, sidebar ,Backdrop</div>
        <main>
            {props.children}
        </main>
    </Auxi>
)


export default Layout ;