import {configureStore} from '@reduxjs/toolkit';
import cartSlice from './cart-slice';
import wishSLice from './wish-slice';
import singlePetSlice from './singlePet-slice';

const store = configureStore({
    reducer:{cart:cartSlice.reducer, wish:wishSLice.reducer,singlePet:singlePetSlice.reducer}
});

export default store;