const store=require("./app/store")
const cakeActions=require("./features/cake/cakeSlice")
console.log("initial state", store.getState());

const unsubscribe=store.subscribe(()=>{
    console.log("updated state", store.getState());
})

store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.restocked(5))
unsubscribe()

