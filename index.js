const redux=require("redux")
import { legacy_createStore as createStore} from 'redux'

const createStore=redux.legacy_createStore

const CAKE_ORDERED="CAKE_ORDERED"
const CAKE_RESTOCKED="CAKE_RESTOCKED"

const ICECREAM_ORDERED="ICECREAM_ORDERED"
const ICECREAM_RESTOCKED="ICECREAM_RESTOCKED"

//defined action
function orderCake(qty=1) {
    return {
        type:CAKE_ORDERED,
        payload:qty
    }
}

function restockCake(qty=1) {
    return {
        type:CAKE_RESTOCKED,
        payload:qty
    }
}
function orderIcecream(qty=1) {
    return {
        type: ICECREAM_ORDERED,
        payload:qty
    }
}
function restockIcecream(qty=1) {
    return {
        tpye: ICECREAM_RESTOCKED,
        payload:qty
    }
}


const initialCakeState={
     numOfCakes:10
}

const initalIcecreamState={
    numOfIceCream:10
}

const cakeReducer=(state=initialCakeState,action)=>{
switch(action.type){
    case CAKE_ORDERED:
        return {
            ...state,
            numOfCakes:state.numOfCakes-1

        }
    case CAKE_RESTOCKED:
        return {
            ...state,
            numOfCakes:state.numOfCakes+1
        }
    default:
        return state
}
}

const icreamReducer=(state=initalIcecreamState,action)=>{
    switch(action.type){
        case ICECREAM_ORDERED:
            return {
                ...state,
                numOfIceCream:state.numOfIceCream-1
            }
        case ICECREAM_RESTOCKED:
            return {
                ...state,
                numOfIceCream:state.numOfIceCream+1
            }
            default :
            return state
    }
}

const rootReducer=redux.combineReducers({
    cake:cakeReducer,
    iceCream:icreamReducer
})

const store=createStore(rootReducer)

