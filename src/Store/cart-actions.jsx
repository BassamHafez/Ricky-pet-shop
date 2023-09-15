import { cartActions } from "./cart-slice"


const sendCartIntoLocalStorage =(cartItems)=>{
    return (dispatch)=>{    
        localStorage.setItem('cart',JSON.stringify({
            items:cartItems.items,
            totalQuantity:cartItems.totalQuantity
        }))
    }
}

export const getCartFromLocalStorage=()=>{
    return(dispatch)=>{
       const cartData = JSON.parse(localStorage.getItem('cart'));
       dispatch(cartActions.replaceDataInCart({
        items:cartData.items,
        totalQuantity:cartData.totalQuantity
   }))
    }
}

export default sendCartIntoLocalStorage;