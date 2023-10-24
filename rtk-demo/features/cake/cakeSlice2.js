const createSlice=require("@reduxjs/toolkit").createSlice

const initalState={
    numOfCakes:10
}

const cakeSlice=createSlice({
    name:"cake",
    initalState,
    reducers:{
        ordered:(state=initalState)=>{
        state.numOfCakes--
        },
        restocked:(state=initalState,action)=>{
            state.numOfCakes+=action.payload
        }
    }
})

module.exports=cakeSlice.reducer
module.exports.cakeAction=cakeSlice.actions