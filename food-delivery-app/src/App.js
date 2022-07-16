import { Fragment,useState } from 'react';

import Header from "./components/Layout/Header";
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart'
import CartProvider from './store/CartProvider';

function App(){

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () =>{
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return(
    <CartProvider>
       
       {cartIsShown && <Cart onClose = { hideCartHandler }/>}
       <Header onShowCart = { showCartHandler } />
       <main>
          <Meals/>   
       </main>
   
    </CartProvider>
    // <Fragment> /* (1) */
    //    {cartIsShown && <Cart onClose = {hideCartHandler}/>}
    //    <Header onShowCart = { showCartHandler } />
    //    <main>
    //       <Meals/>   
    //    </main>
    // </Fragment>
     );
} 

export default App;

/* Before using the useState() here we were getting the Cart pop up message all the time. Therefore to showon it 
conditionally we'll be using two useState() to put up some condition on the appearence and occurence of that pop 
message. */

/* With the help of cartIsShown variable of useState() we are managing to shown card only when that varible is true. 
Intially the cart is not shown becz intial value ofhte variable is set as False in that useState() */

/* No we want that when the "Your Cart" button is clicked then only cart should appear and that Your Cart button
is inside Header component. Therefore we need to send the prop to Header folder.
Therefore showCartHandler is passed to the Header component which will be futher passed to the HeaderCartButton component
in the Header component. So whenever Your Cart button on the header will be clicked this showCartHandler will execute.*/

/* (1) Previously we use to wrap all the components with the Fragment compo of the react but since context will be used by all
the component present in the App.js file therefore we are wrapping them with CartProvider and removing Fragment. However we can 
implement the logic of CartProvider inside teh App.js also but we just want to keep App.js clean*/

/* How do we need CartProvider or context in HeaderCartButton ?
Ans:1) In the Header ---> HeaderCartButton we need to update the number of item in the cart dynamically therefore we need context there. 
2) Cart component needs the access of the context to render the items and also edit them later
3) and the meals need access of the cart because there we wanna add item to the cart*/