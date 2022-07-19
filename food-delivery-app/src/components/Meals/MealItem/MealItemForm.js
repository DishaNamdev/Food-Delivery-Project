import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import { useRef, useState } from "react";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault(); // this is done to prevent the re-loading of browser again and again.

    const enteredAmount = amountInputRef.current.value; // this value that we got is a string not a number in the below line we are changing the to a string to a number

    const enteredAmountNumber = +enteredAmount; // by adding + before the enteredAmount we are converting the string to a number

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      // if any of the above condition satisfies then we wanna return and not continue with the function execution before this we wanna throw an error using useState
      setAmountIsValid(false);
      return;
    }

    /* ((1)) */
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      {/* <input/> we desinged a component for this input */}
      <Input
        ref={amountInputRef} // now do to the component which is accepting Ref
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      {/* Here the 2nd {} inside the input element shows that */}
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
    </form>
  );
};

export default MealItemForm;

/*((1)) if the above mentioned any condition is not true that measn we wanna add that item to the cart. But we don't want to add directly here because we don't have sufficient 
things like, id, amount etc provided here we will be setting up all these things in any other component therefore we are just calling a fucntion provided by that component through 
props here rest that component will handle */
