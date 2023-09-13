import {createSlice} from '@reduxjs/toolkit';



const wishSLice =createSlice({
name:'wishList',
initialState:{
    items:[],
    totalQuantity:0
},

reducers:{
    addItemsToWishList(state,action){
        const newItem= action.payload;
        const existingItem= state.items.find((item)=>item.id===newItem.id);
        state.totalQuantity++;
        if(existingItem){
            existingItem.quantity++;
        }
        else{
            state.items.push({
                id:newItem.id,
                name:newItem.name,
                quantity:1,
                src:newItem.src
            });
        }
    },
    removeItemsFromWishList(state,action){
        const  id = action.payload;
        const exisitngItem = state.items.find((item)=> item.id === id);
        state.totalQuantity--;
        if(exisitngItem.quantity===1){
            state.items=state.items.filter((item)=> item.id !== id);
        }
        else{
            exisitngItem.quantity--;
        }
    },
}

});


export const wishActions = wishSLice.actions;
export default wishSLice;

