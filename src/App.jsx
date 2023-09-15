import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dogs from "./Pages/Dogs/Dogs";
import Cats from "./Pages/Cats/Cats";
import Birds from "./Pages/Birds/Birds";
import Root from "./Pages/Root";
import Home from "./Pages/Home/Home.jsx/Home";
import Error from "./Components/Error/Error";
import SinglePet from "./Components/SinglePet/SinglePet";

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
  return <RouterProvider router={router} />;
}

export default App;
