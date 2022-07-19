import CartContext from "./cart-context";
import { useReducer } from "react"; // we will use it for reducing state here.

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

/* ((2)) */
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    /* ((6)) */
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.items[existingCartItemIndex]; /* (7) */

    // let updatedItem; // this is used as an object
    let updatedItems; // this is used as an array

    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    /* the below thing is done to check whether the items is already the part of the cart. If yes, then it has just updated the already existing item my creating
      a new object named updatedItem inside this we have kept the updated amount of total same type of that obj and then we pushed it to the place of old object kept
      inside updatedItems named array at the index of existingCartItemIndex that we got on the above line. */
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount /* (8) */,
      };

      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem; // the new obj that we made above is pushed at this index
    } else {
      // inside else we will come when the item which is going to add in the cart doesn't already exists in the cart
      // updatedItem = { ...action.item };
      updatedItems = state.items.concat(action.item); /*(9) */
    }

    // const updatedItems = state.items.concat(action.item); moving this in the else block as we did in the above line

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    ); // we got the index of the object

    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;

    let updatedItems;

    if(existingItem.amount === 1){// here amount denotes the number of same type of objects
        updatedItems = state.items.filter(item => item.id !== action.id);
    }else{
      const updatedItem = { ...existingItem, amount: existingItem.amount -1};
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  /*(3)*/ const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  ); // inside state cartReducer will go and inside action defaultCartState will go

  const addItemToCartHandler = (item) => {
    dispatchCartAction({
      type: "ADD",
      item: item,
    }); /*(4) (5)type: defines the type of action that was sent*/
  };

  const removeItemToCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    // it is an object
    // items: [], /* updating after applying useReducer to remove the hardcoded data */
    items: cartState.items,
    // totalAmount: 0, /* updating after applying useReducer to remove the hardcoded data */
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children} {/* 1 */}
    </CartContext.Provider>
  );
};

export default CartProvider;
/* (1) by doing this we get allowance to wrap any components that should get access to this context with this cart
provider component we can also add logic for managing the context data to this component so everything that all about that
is contained in one component and not in other components */

/* The goal of this component is to manage the cart context data and provide that context to all the component which want to access it.
This component can be used to wrap all the component that need access of the cart of the website */

/* For adding the cart items we need to go to come to the CartProvider */

/* Whenever we wanna add a item an it will come in addItemToCartHandler function then here we wanna check that whether that element already exists
in the cart or not. If yes it already does exists then we will update its amount but if it doesn't exists already then we will add it in the cart. */

/*(2) // outside of the component function because this reducer function won't need any data from the components */

/* the "action" in the useReducer is dispatched by you later in your code and the state simply contains the last state snapshot and then as part of 
the useReducer() function this function returns the snapshot of the latest state*/

/*(3) Using array destructuring and getting the state snapshot and disaptchFunc the first element of destructured array will contain latest state snapshot
and the second element is a function which allows you to dispatch an action to reducer*/

/*(4) this function takes something which define the action part in useReducer(), it can be a integer or string or obj etc
    but generally we prefer to send and object. */

/*(5) In the dispatchCartAction() function we passes the type attribute which says the type of the action that will be forwarded and then the item property defines
the item that is to be sent */

/*((6)) here we can use push metho also instead of concat to add the new elements in th old array but the problem with the push method is that id don't create a new array
object instead it add the newly passed elemtns in the old array wich may be located at some specific memory location which is ehen updaed but we don't want this becaise of the changes are made in the
old array only then react will not get informed aboout this and state will not update that's why we are using concat() function of javascript which returns a new brand
array of which react get to know about it and state changes*/

/*NOTE: NOW ALL THE ITEMS WHEN WE ARE ADDING CURRENTLY ARE APPEARING DOUBLE TRIPLE BUT WE WANT THAT IF THE ITEM ALREADY EXISTS IN THE CART THEN IT'S COUNT AND TOTAL AMOUNT SHOULD
INCREASE ONLY NOT AGAIN THE SAME NAME SHOULD APPEAR IN THE CART THEREFORE WE ARE ADDING ANOTHER CONSTANT existingCartItemInex IN THE CART.JS FILE WHICH USES findIndex() METHOD WICH TAKES 
A FUCNTION AS AN ARGUMENT AND THAT ITEM SHOULD RETURN TRUE IF THAT'S THE ITEM THAT WE ARE LOOKING FOR IN THE CART OTHERWISE IT SHOULD RETURN FALSE
.findIndex(item => item.id === action.item.id); this means that if the item that we are looking for has the same id as action.item.id then return true.*/

/* (7) existingCartItem will contain the cartItem whose id was returned by the findIdex() method. This method will work only if items array contains the element with that id if
items don't contain that element then existingCartItem will contain null*/

/*(8) This part shows that if existingCartItem is true that means that item already exists inside our cart then in taht case we we make another object named as updatedItem which will contain all the existing cart item
which are in existingCartItem and also the amount which includes amount of previous cart items + current item amount
by ...existingCartItem we mean that add the items in the cart which were previously inside the cart.*/

/*(9)  here we took our previous items using (...) and then added the new item to it using action.item whatever we got our new updatedItem obje
we will add it to our cart and concat it with existing array as we did in the below line */
