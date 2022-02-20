import actionTypes from "../actionsTypes.js";

const initalState = 0;

const countReducer = (state = initalState,action) => {

    switch (action.type) {
        case actionTypes.count.INCREASE_COUNT:
            return state + action.payload ;
            case actionTypes.count.DECREASE_COUNT:
                return state - action.payload ;
    
        default:
            return state;
    }
}

export default countReducer;


// Actionlar ile stor arasındaki bağlantıyı kuran actionları neyin nerde kullanıldığını öğrettiğimiz yer
// todoReduceri ekledik
