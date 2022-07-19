// this file and the content inside this file can be filled in the Header.js file only
// but we just don't want to blot it with the styling and other content therefore we are making a diff
// seperate component.

import { useContext, useEffect, useState } from "react";

import CartIcon from "../Cart/CartIcon.js";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context.js";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext); // cartCtx is used to get the number of items in the cart

  // const numberOfCartItems = cartCtx.items.length; /* (1) */

  // console.log(cartCtx);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
      return curNumber + item.amount;
    }, 0);// intially the value inside the cart will be 0 becasuse we have specified 0 as the initial value.

  const btnClasses = `${classes.button} ${btnIsHighlighted? classes.bump :''}`; //(2 , 3) these are the classes defined in the HeaderCartButton.module.css
  
  //performing object destructuring
  const { items } = cartCtx;

 /* useEffect(() => {
    if(cartCtx.items.length === 0){
      return;
    }
    setBtnIsHighlighted(true); /* (3) */
  // }, [cartCtx]);  if we write cartCtx as the dependency here then the useEffect will execute everytime when the anything in the cartCtx change that thing we don't want. We want it to only change on certain 
  // thing for this thing we will be using object destructuring and using writing this code again but using items as the dependency instead of cartCtx; */

  useEffect(() => {
    if(cartCtx.items.length === 0){
      return;
    }
    setBtnIsHighlighted(true); /* (3) */

    const timer = setTimeout (()=> {
      setBtnIsHighlighted(false); /* (4) */
    },300);

    return () =>{
      clearTimeout(timer); /* (5) */
    };

  }, [items]); 

  return (
    <button className={btnClasses} onClick={props.onClick}>
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

/* because of making and using context we made the connection between the Header, Meals direct connection with the CartProvider in the App.js file by using the CartProvider as the wrapper
because of which wherever we have used the context, if any changes made to the Header and Meals or their to their children then CartProvider will run and which will trigger the context object that is used everywhere. As here we have use useContext therefore whenever the CartProvider will change here useContext variable
cartCtx will trigger and will change. */

/*(2) afte adding this class our cart button bumps only once but we want that whenever item is added inside the cart or we can say cart changes it should bump again so for this thing we are using useEffect()*/

/*(3) by btnHighlighted ? classes.bump : '';  we mean that whenever btnHighlighted is true then classes.bump should be added in the btnClasses otherwise it should remain empty */

/*(4) by using setTimeout we are ensuring that everytime when the add button is clicked the cart button will bump before doing this when we were clicking add button for the first time only it was bumping becauase after clicking once
the class was permanently added to the btnClasses const but with the help of setTimeout we removed it after 300ms from btnClasses constant. Now the question arises why 300ms only
then the answer is animation will run for 300ms as we set this in our css file*/

/*(5) Here we are passing clear function to clear the timer we setup becasue inside useEffect() if we use any timer then its a good practice to clear that timer and for clearing the timer we usually pass a function so that when the useEffect re-runs we clear the timer that cleanup function is called automatically by react. By doing
so we are ensuring that whenever we are adding more items simultaneously then old timer should get clear up first and then a new timer should start*/