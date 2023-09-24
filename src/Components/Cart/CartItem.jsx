import React from "react";
import styles from "./CartItem.module.css";
import { useDispatch } from 'react-redux';
import { cartActions } from '../../Store/cart-slice';
import classes from './CartItemTwo.module.css';
import { wishActions } from './../../Store/wish-slice';

const CartItem = (props) => {
  const dispatch= useDispatch();

  const addItemHandler=(isCart)=>{
    if(isCart){
      dispatch(cartActions.addItemsToCart({
        id:props.id,
      }))
    }
    else{
      dispatch(wishActions.addItemsToWishList({
        id:props.id,
      }))
    }
 
  }
  const id =props.id
  const removeItemHandler=(isCart)=>{
    if(isCart){
      dispatch(cartActions.removeItemFromCart(id))
    }
    else{
      dispatch(wishActions.removeItemsFromWishList(id))
    }
  }

  const removeFullItemHandler=(isCart)=>{
    if(isCart){
      dispatch(cartActions.removeFullItemFromCart({
        id:props.id,
        quantity:props.quantity
      }))
    }
    else{
      dispatch(wishActions.removeFullItemFromWishList({
        id:props.id,
        quantity:props.quantity
      }))
    }
  }

 


  const cssCLasses= props.wishList?styles:classes;
  const svgColor= props.wishList?"rgb(67, 184, 238)":"#6b6a6a";
   

  return (
    <div className={`${cssCLasses.item_container} d-flex`}>
      <div className={cssCLasses.item_img}>
        <img src={props.src} className="w-100" alt="img" />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill={svgColor} fillOpacity="1" d="M0,224L40,224C80,224,160,224,240,192C320,160,400,96,480,80C560,64,640,96,720,128C800,160,880,192,960,176C1040,160,1120,96,1200,74.7C1280,53,1360,75,1400,85.3L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>      </div>
      <div className={cssCLasses.item_caption}>
        <h4 className={cssCLasses.item_title}>{props.name}</h4>
        <div className={cssCLasses.item_controls}>
          <button onClick={()=>removeItemHandler(!props.wishList)} className={cssCLasses.item_controls_plmi}>-</button>
          <span>{props.quantity}</span>
          <button onClick={()=>addItemHandler(!props.wishList)} className={cssCLasses.item_controls_plmi}>+</button>
        </div>
        <button onClick={()=>removeFullItemHandler(!props.wishList)} className={cssCLasses.item_bin}>
          <i className="fa-solid fa-trash-can"></i>
        </button>
        <button className={cssCLasses.item_share}>
          <i className="fa-solid fa-share"></i>
        </button>
      </div>
     
    </div>
  );
};

export default CartItem;
