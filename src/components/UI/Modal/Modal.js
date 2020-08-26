import React from 'react'
import classes from './Modal.css';
import Auxi from '../../../HOC/Auxi';
import Backdrop from '../BackDrop/Backdrop'
const Modal = (props) => (
    <Auxi>
        <Backdrop show={props.show} clicked={props.ModalClosed} />
        <div 
            className={classes.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}
        >
            {props.children}
        </div>
    </Auxi>


)

export default Modal ;