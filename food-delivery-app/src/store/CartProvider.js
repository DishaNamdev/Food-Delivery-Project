import Cart from "../components/Cart/Cart";
import CartContext from "./cart-context";
import { useReducer } from "react"; // we will use it for reducing state here.


const defaultCartState = {
    items: [],
    totalAmount: 0
};

/* ((2)) */
const cartReducer = (state,action) => {
  if(action.type === 'ADD'){ /* ((6)) */
      const updateItems = state.items.concat(action.item);
      const updatedTotalAmount = state.totalAmount.action.item.price * action.item.amount;
      return{
        item: updateItems,
        totalAmount: updatedTotalAmount
      };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  /*(3)*/const [cartState, dispatchCartAction] =  useReducer(cartReducer,defaultCartState); // inside state cartReducer will go and inside action defaultCartState will go

  const addItemToCartHandler = (item) => {
    dispatchCartAction({type: 'ADD', item: item});/*(4) (5)type: defines the type of action that was sent*/
  };

  const removeItemToCartHandler = (id) => {
    dispatchCartAction({type: 'REMOVE', id: id});
  };

  const cartContext = { // it is an object
    // items: [], /* updating after applying useReducer to remove the hardcoded data */
    items: cartState.items,
    // totalAmount: 0, /* updating after applying useReducer to remove the hardcoded data */
    totalAmount: cartState.totalAmount,
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

/* For adding the cart items we need to go to come to the CartProvider */

/* Whenever we wanna add a item an it will come in addItemToCartHandler function then here we wanna check that whether that element already exists
in the cart or not. If yes it already does exists then we will update its amount but if it doesn't exists already then we will add it in the cart. */

/*((2)) // outside of the component function because this reducer function won't need any data from the components */

/* the "action" in the useReducer is dispatched by you later in your code and the state simply contains the last state snapshot and then as part of 
the useReducer() function this function returns the snapshot of the latest state*/

/*(3) Using array destructuring and getting the state snapshot and disaptchFunc the first element of destructured array will contain latest state snapshot
and the second element is a function which allows you to dispatch an action to reducer  */

/*((4)) this function takes something which define the action part in useReducer(), it can be a integer or string or obj etc
    but generally we prefer to send and object. */

/*((5)) In the dispatchCartAction() function we passes the type attribute which says the type of the action that will be forwarded and then the item property defines
the item that is to be sent */

/*((6)) here we can use push metho also instead of concat to add the new elements in th old array but the problem with the push method is that id don't create a new array
object instead it add the newly passed elemtns in the old array wich may be located at some specific memory location which is ehen updaed but we don't want this becaise of the changes are made in the
old array only then react will not get informed aboout this and state will not update that's why we are using concat() function of javascript which returns a new brand
array of which react get to know about it and state changes*/