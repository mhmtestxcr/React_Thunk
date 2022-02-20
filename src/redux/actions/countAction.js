import actionTypes from "../actionsTypes.js";


const increaseCount = (val) => {
    return { type:actionTypes.count.INCREASE_COUNT, payload:val }
}

const decreaseCount = (val) => {
    return { type:actionTypes.count.DECREASE_COUNT, payload:val }
}

const counterActions = {
    increaseCount,
    decreaseCount,
}

export default counterActions;