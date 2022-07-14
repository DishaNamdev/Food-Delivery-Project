import classes from './Cart.module.css';
import Modal from '../UI/Modal';

const Cart = (props) => {
  const cartItems = (
    <ul className={classes['cart-item']}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map(
        (item) => (
          <li>{item.name}</li>
        ) // this is the dummy cart data provided by me. Later li tags will be replaced by the modal component and cartItem will be passed later with the help of a context.
      )}
    </ul>
  );
  return (
    <Modal onClose = {props.onClose}> {/* (3) */}
      {/* <div>*/}
      {/* the above div will later be the modal component. */}
      {cartItems}
      <div className = {classes.total}>{/* Here the price will appear */}
          <span>Total Amount</span>
          <span>35.69</span>
      </div> 

      <div className= {classes.actions}>
        <button className={classes['button--alt']}  onClick = {props.onClose}>Close</button> {/* (2) */}
        <button className={classes.button}>Order</button>
      </div> {/* Total amount in number will be shown here. Total amount is hardcoded here. */}

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