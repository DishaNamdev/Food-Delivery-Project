import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`; // toFixed(2) is used to make sure that there are two decimal places at the end.
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      
      <div>
        <MealItemForm/>
      </div>
     
    </li>
  );
};

export default MealItem;
