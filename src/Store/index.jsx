import {configureStore} from '@reduxjs/toolkit';
import cartSlice from './cart-slice';
import wishSLice from './wish-slice';

const store = configureStore({
    reducer:{cart:cartSlice.reducer, wish:wishSLice.reducer}
});

export default store;