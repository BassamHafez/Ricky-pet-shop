import {createSlice} from '@reduxjs/toolkit';


const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[],
        totalQuantity:0,
    },
    reducers:{
        addItemsToCart(state,action){
            const newItem= action.payload;
            const existingItem = state.items.find((item)=> item.id===newItem.id);
            state.totalQuantity++;
            if(!existingItem){
                state.items.push({
                    id:newItem.id,
                    name:newItem.name,
                    src:newItem.src,
                    quantity:1
                });
            }
            else{
                existingItem.quantity++;
            }
        },
        removeItemFromCart(state,action){
            const id = action.payload;
            const existingItem= state.items.find((item)=>item.id===id);
            state.totalQuantity--;
            if(existingItem.quantity===1){
                state.items=state.items.filter((item)=> item.id !== id)
            }
            else{
                existingItem.quantity--;
            }
        }
    }
})

export const cartActions= cartSlice.actions;

export default cartSlice;