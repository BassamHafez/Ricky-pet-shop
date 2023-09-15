import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import Dogs from "./Pages/Dogs/Dogs";
import Cats from "./Pages/Cats/Cats";
import Birds from "./Pages/Birds/Birds";
import Root from "./Pages/Root";
import Home from "./Pages/Home/Home.jsx/Home";
import Error from "./Components/Error/Error";
import SinglePet from "./Components/SinglePet/SinglePet";
import sendCartIntoLocalStorage, { getCartFromLocalStorage } from "./Store/cart-actions";
import { useEffect } from "react";
import sendDataToWish, { getDataFromWish } from "./Store/wish-actions";

let isFirstTime =true;

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root />,
    errorElement: <Error/> ,
    children: [
      { index:true , element: <Home/> },
      { path: "dogs", element: <Dogs /> },
      { path: "cats", element: <Cats /> },
      { path: "birds", element: <Birds /> },
      { path: "cats/singlePet", element: <SinglePet /> },
      { path: "dogs/singlePet", element: <SinglePet /> },
    ],
  },
]);

function App() {
  const cartItems = useSelector(state=>state.cart);
  const dispatch=useDispatch();
  const wishItems=useSelector(state=>state.wish)
  //send and receive data from cart
  useEffect(()=>{
    if(JSON.parse(localStorage.getItem('cart'))){
      dispatch(getCartFromLocalStorage())
    }
  },[dispatch]);

  useEffect(()=>{

    if(isFirstTime){
      isFirstTime=false;
      return;
    }
    if(cartItems.isChanged){
    
      dispatch(sendCartIntoLocalStorage(cartItems));
    }
  },[cartItems,dispatch])
  //send and receive data from wishList

  useEffect(()=>{
    if(JSON.parse(localStorage.getItem('wishList'))){
      dispatch(getDataFromWish())
    }
  },[dispatch]);

  useEffect(()=>{
    if(isFirstTime){
      isFirstTime=false;
      return;
    }
    if(wishItems.isChanged){
      dispatch(sendDataToWish(wishItems))
    }
  },[wishItems,dispatch]);


  return <RouterProvider router={router} />;
}

export default App;
