import React, {Component} from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}
class BurgerBuilder extends Component {
    /* constructor(props) {
        super(props);
        this.state = {...}
    } */

    state = {
        ingredient: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4
    }

    addIngredienHandler = (type) => {
        const oldCount = this.state.ingredient[type];
        const updateCount = oldCount + 1;
        const updateIngredients = {
            ...this.state.ingredient
        };
        updateIngredients[type] = updateCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredient: updateIngredients});
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredient[type];
        if(oldCount <= 0){
            return;
        }
        const updateCount = oldCount - 1;
        const updateIngredients = {
            ...this.state.ingredient
        };
        updateIngredients[type] = updateCount;
        const priceReduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceReduction;
        this.setState({totalPrice: newPrice, ingredient: updateIngredients});
    }

    render () {
        const disabledInfo = {
            ...this.state.ingredient
        };
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        //{salad: true; meat: false...}
        return (
            <Aux>
                <Burger ingredients={this.state.ingredient}/>
                <BuildControls ingredientAdded={this.addIngredienHandler} 
                               ingredientRemove={this.removeIngredientHandler}
                               disabled={disabledInfo}
                               price={this.state.totalPrice}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;