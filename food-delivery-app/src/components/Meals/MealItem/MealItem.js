import classes from "./MealItem.module.css";


import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../../../store/cart-context"

const MealItem = (props) => {

  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`; // toFixed(2) is used to make sure that there are two decimal places at the end.

  const addToCartHandler = (amount) => {
     cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
     });// this is one of the methods define in our cartContext ((2))
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      
      <div>
        <MealItemForm id= {props.id} onAddToCart= { addToCartHandler }/>
      </div>   
    </li>
  );
};

export default MealItem;

/* (1) Here we will pass the item which will go inside the CartProvider's addItemtoCartHandler() function
which will pass that item to the useReducer() through dispatchItem() property of useReducer */

/* Since we set an id prop here also , so in the available meal component where we render all the meal items we wass put and id prop */