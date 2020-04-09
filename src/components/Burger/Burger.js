import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = props => {

    let transformedIngredients = Object.keys(props.ingredients) // transform object into array with only keys
        .map(igKey => {
            return [...Array(props.ingredients[igKey])] // get the array with length only to know the size of the elements
                .map((_, i) => {
                    return <BurgerIngredient key={igKey + i} type={igKey} />
                })
        }).reduce((arr, el) => {
            return arr.concat(el) //flatten the array to check if no ingredients, check reduce documentation
        }, []);

    if(transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }
    console.log(transformedIngredients);
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;