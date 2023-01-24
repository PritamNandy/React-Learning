import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import Button from './Button'
import Card from './Card'
import classes from './ErrorModal.module.css'

const BackDrop =  (props) => {
    return <div className={classes.backdrop} onClick={props.clearError}/>;
}

const ModalOverlay =  (props) => {
    return (
        <Card classes={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={classes.actions}>
                    <Button
                    onClick={props.clearError}>Okay</Button>
                </footer>
            </Card>
    );
}

export default function ErrorModal(props) {
  return (
    <Fragment >
        {ReactDOM.createPortal(<BackDrop onClick={props.clearError} />, document.getElementById('backdrop-root'))}
        {ReactDOM.createPortal(<ModalOverlay message={props.message} title={props.title} clearError={props.clearError} />, document.getElementById('overlay-root'))}
    </Fragment>
  )
}
