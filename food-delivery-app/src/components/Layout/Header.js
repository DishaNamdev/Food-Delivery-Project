import { Fragment } from "react";
import mealsImg from '../../assests/mealsImg.jpg';
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1> HungryHuman </h1>
            {/* <button> Cart </button> */}
            <HeaderCartButton/>
        </header>
            <div className = {classes['main-image']}> {/*this css class is written like becaue it contain a dash inside of it.*/}
               
                <img src = {mealsImg} alt="delicious image"/>
            </div>
    </Fragment>
};

export default Header;