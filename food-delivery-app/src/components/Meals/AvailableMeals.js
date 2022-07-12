// this will bring the actual list of meals to the screen
// we will add the dummy data above the Availabe Meals component.abs

import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from '../Meals/MealItem/MealItem';

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];
// this javascript array will be now after fetching will be converted into a JSX elements

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        {/* <ul> */}
        {mealsList}
        {/* </ul> */}
      </Card>
    </section>
  );
};

export default AvailableMeals;

// the card importe above will be used to wrap the <ul> component.</ul>
