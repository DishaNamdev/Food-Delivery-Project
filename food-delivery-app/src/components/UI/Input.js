import classes from './Input.module.css';

const Input = props => {
    return(
        <div className={classes.input}>
            <label htmlFor={props.input.id}> {props.label} </label>
            {/* <input id={props.input.id} {...props.input}/> */}
            <input {...props.input}/>
        </div>
    );
};

export default Input;
// the spread operator (...props) above ensures that all the key value pairs that we added with the input component
// which we receive on props input are added as props to input.

// suppose the input element contains an object {type: 'text'} here then the spread operator will ensure that type is equal to text
// being added here. This is just and convienient way of making this input element here highly configurable so also we can remove the "id"
// if we want to which we already do expect just on the above line and which is added automatically through spread operator as a prop to this
// input element. So this is the reason we commented the second line