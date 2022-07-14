import React from 'react';

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem:(item) => {},
    removeItem: (id) => {}
});

export default CartContext;
/* After creating the context we need to provide it some properties so that this context can 
also change over time and can update parts of the application over time. So for this we are creating
a new file named ContextProvider however the works of this file can be done in the same file also. 

NOTE: FOR MANAGING THE CONTEXT WE CAN USE useState() or useReducer()*/

/* inside addItem we are expecting a item to come in so that we can add it in the cart */

/* inside the removeItem field we are expecting the id of the item that is to be deleted so "id" will be
passed inside the removeItem field using which that item will be deleted */