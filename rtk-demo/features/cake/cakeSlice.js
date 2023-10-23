const createSlice=require("@reduxjs/toolkit").createSlice

const initialState={
    numOfCakes:10
}

const cakeSlice=createSlice({
    name:"cake",
    initialState,
    reducers:{
        ordered:(state=initialState)=>{
            state.numOfCakes--
        },
        restocked:(state=initialState,action)=>{
            state.numOfCakes+=action.payload
        },
    }
})

module.exports=cakeSlice.reducer
module.exports.cakeActions=cakeSlice.actions
