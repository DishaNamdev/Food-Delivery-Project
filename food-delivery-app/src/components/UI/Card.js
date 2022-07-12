import classes from './Card.module.css';

const Card = props =>{
    return <div className={classes.card}>
        {props.children}
    </div>
}

export default Card;
// this will act the wrapper component for all the component which uses it.
// It will provide the card type UI to all the component which uses it as the wrapper.