// this file and the content inside this file can be filled in the Header.js file only
// but we just don't want to blot it with the styling and other content therefore we are making a diff
// seperate component.

import { useContext } from "react";

import CartIcon from "../Cart/CartIcon.js";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context.js";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext); // cartCtx is used to get the number of items in the cart

  // const numberOfCartItems = cartCtx.items.length; /* (1) */

  // console.log(cartCtx);

  const numberOfCartItems = cartCtx.items.reduce(
    (curNumber, item) => {
      return curNumber + item.amount;
    }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span> Your Cart</span>
      <span className={classes.badge}> {numberOfCartItems} </span>{" "}
      {/* this shows the number of item in your cart */}
    </button>
  );
};

export default HeaderCartButton;
/* button tags by default has onClick prop so we set props.onClick to the button. */

/*((1)) if we do in this way then we'll be getting the types of meals along with the no. of same meal will also be added in it that is wrond. Actually we just want to get the different kind of meals and then the num of one type of meal will be added in total but in the cart we just want to show the types of meals */

/* reduce() is the built in method which allow us to transform an array of same type of objects in single type of value. This reduce function takes two arguments
first it takes a fucntion and then a value or we can say starting value. We are setting this starting value as 0
Inside the function in reduce method it takes two arguments currNumber ( or whatever we wanna call it) and the item at which it is currently having a look. 
currNumber will be differenct for every item calling it for example: apple calls it then currNumber for apple will be 0, and if again orange calls it then the currNumber of organge will be 0 etc for others
as initially the currNumber is 0 and after the fucntion has started execution it will be the result which you returned in that previous execution*/
