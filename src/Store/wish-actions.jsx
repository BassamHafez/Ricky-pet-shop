import { wishActions } from "./wish-slice";

const sendDataToWish=(wishList)=>{
    return dispatch=>{
        localStorage.setItem('wishList',JSON.stringify({
            items:wishList.items,
            totalQuantity:wishList.totalQuantity
        }));
    }
}

export const getDataFromWish=()=>{
    return dispatch =>{
        const wishListData = JSON.parse(localStorage.getItem('wishList'));
        dispatch(wishActions.replaceItems({
            items:wishListData.items,
            totalQuantity:wishListData.totalQuantity
        }))
    }
}

export default sendDataToWish;