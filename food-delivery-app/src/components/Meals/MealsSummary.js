// this compoennt will present the list of meals on the screen

import classes from './MealsSummary.module.css';

const MealsSummary = props =>{
    return <section className = {classes.summary}>

        <h2>
            Delicious Food, Delivered To You
        </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quaerat vel, non excepturi enim ea fugit saepe sint nostrum harum ad deleniti voluptates omnis a modi minus quae porro aspernatur?</p>

        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat placeat blanditiis ex cum? Dolorem, eius commodi! Ad velit ex debitis aliquam?</p>
    </section>
};

export default MealsSummary; 