const ingredients = {
    ingredient: {
        flour: 100,
        choco: 100,
        cherry: 50
    },
    readystock: {
        donut: 0,
        cake: 0
    }
}


const ingredientsReducer = (state = ingredients, action) => {
    if (action.type === 'MAKE_ONE_DONUT') {
        const newState = {
            ingredient: {
                flour: state.ingredient.flour - 10,
                choco: state.ingredient.choco - 5,
                cherry: state.ingredient.cherry
            },
            readystock: {
                donut: state.readystock.donut + action.quantity,
                cake: state.readystock.cake
            }

        }

        return newState
    }
    if (action.type === 'MAKE_ONE_CAKE') {
        const newState = {
            ingredient: {
                flour: state.ingredient.flour - 10,
                choco: state.ingredient.choco - 5,
                cherry: state.ingredient.cherry
            },
            readystock: {
                donut: state.readystock.donut,
                cake: state.readystock.cake + action.quantity
            }

        }

        return newState
    }

    if (action.type === 'RESTOCK_INGREDIENTS') {
        const newState = {
            ingredient: {
                flour: ingredients.ingredient.flour,
                choco: ingredients.ingredient.choco,
                cherry: ingredients.ingredient.cherry
            },
            readystock: {
                donut: state.readystock.donut,
                cake: state.readystock.cake
            }
        };

        return newState
    }

    return state;
};

export default ingredientsReducer;