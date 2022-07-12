// this file and the content inside this file can be filled in the Header.js file only
// but we just don't want to blot it with the styling and other content therefore we are making a diff
// seperate component.

import CartIcon from "../Cart/CartIcon.js";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = props => {
    return(
        <button className={classes.button}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span> Your Cart</span>
            <span className={classes.badge}> 3 </span> {/* this shows the number of item in your cart */}
        </button>
    )
};

export default HeaderCartButton;