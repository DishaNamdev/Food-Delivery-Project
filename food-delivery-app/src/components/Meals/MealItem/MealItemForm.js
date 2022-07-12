import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  return (
    <form className={classes.form}>
      {/* <input/> we desinged a component for this input */}
      <Input
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      {/* Here the 2nd {} inside the input element shows that */}
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
