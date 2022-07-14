import Cart from "../components/Cart/Cart";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const addItemToCartHandler = (item) => {};

  const removeItemToCartHandler = (id) => {};

  const cartContext = { // it is an object
    items: [],
    totalAmount: 0,
    addItemm: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  };

  return (
    <CartContext.Provider value={CartContext}>
      {props.children} {/* 1 */}
    </CartContext.Provider>
  );
};

export default CartProvider;
/* (1) by doing this we get allowance to wrap any components that should get access to this context with this cart
provider component we can also add logic for managing the context data to this component so everything that all about that
is contained in one component and not in other components*/


/* The goal of this component is to manage the cart context data and provide that context to all the component which want to access it.
This component can be used to wrap all the component that need access of the cart of the website*/
