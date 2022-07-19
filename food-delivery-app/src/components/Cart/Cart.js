import { useContext } from "react";

import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`; /* (5) */
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = id =>{
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = item => {
    cartCtx.addItem({...item, amount: 1}); // this method triggers the addItemToCartHandler method inside the CartProvider method-
  };
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {/* {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map(
        (item) => ( */}
      {/* (4) */}
      {cartCtx.items.map(
        (item) => (
          // <li>{item.name}</li>
          <CartItem 
            price={item.price}
            key={item.id}
            name={item.name}
            amount={item.amount}
            onRemove = {cartItemRemoveHandler.bind(null,item.id)} /* (8) */
            onAdd = {cartItemAddHandler.bind(null,item)}
          /> /* (7) */
        ) // this is the dummy cart data provided by me. Later li tags will be replaced by the modal component and cartItem will be passed later with the help of a context.
      )}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {/* {" "} */}
      {/* (3) */}
      {/* <div>*/}
      {/* the above div will later be the modal component. */}
      {cartItems}
      <div className={classes.total}>
        {/* Here the price will appear */}
        <span>Total Amount</span>
        <span>{totalAmount} </span>
        {/* <span>35.69</span> */} {/* (5) */}
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {" "}
        {/* (2) */}
        {hasItems && <button className={classes.button}>Order</button>}{" "}
        {/* (6) */}
      </div>{" "}
      {/* Total amount in number will be shown here. Total amount is hardcoded here. */}
      {/*</div>*/}
    </Modal>
  );
};

export default Cart;
/* This cart component will be used somewhere therefore we will use it in the App.js. Although
the exact position of Cart component doesn't matter at all because we areu using portals and overlays
in it. That will cover almost everything */

/* (2) At line 2 when the close button will be clicked that onClose prop of the App.js will ran and Cart will disappear button we 
want that whenever backdrop is clicked then also cart should disappeart for that we will put a onClick in backDrop component in Modal.js component*/

/* (3) passing the onClose prop to the Modal component which will pass it to the backdrop component which will inturn use it for closing the cart whenever
backdrop is clicked. */

/*(4) Now we will use cartCtx instead of dummy data so that the items inside the items array is placed and showed inside the cart*/

/* (5) Here totalAmount will be printed actual total amount in plce of this therefore this is commeted*/

/* (6) Here hasItem const confirms that if the cart has some items then only "order" button become visible otherwise it should remain
hidd en  */

/* (7) Here we will not be using <li></li> tag anymore becaause we made a differect component for the styling of the cart named as CartItem so we are 
replacing this li tag with CartItem the props passed inside this component are futher used inside CartItem compo and also we made two functions saying
cartItemAddHandler and cartItemRemoveHandler which are used for adding and removing items from cart respectively*/

/* (8) .bind(null, item.id) method on both the cartItemRemoveHandler and on cartItemAddHandler shows that item id is passed to the onRemove and onAdd prop which was
futher passed to the CartItem compo along with the prop to ensure that item is passed to the onAdd and id is passed to the onRemove in CartItem function */
