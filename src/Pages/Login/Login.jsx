import React, { useEffect } from "react";
import styles from "./Login.module.css";
import Particlesbg from "../../Components/Particles/Particlesbg";
import SandShape from "../../Components/Ui/SandShape";
import InputForm from "./InputForm";
import axios from "axios";
import { redirect } from "react-router-dom";

const Login = () => {

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  return (
    <div className={styles.container}>
      <Particlesbg />
      <InputForm/>
      <SandShape />
    </div>
  );
};



export default Login;

export async function action ({request}) {

    const searchParams = new URL(request.url).searchParams;
    const mode = searchParams.get('mode') || 'signin';

    const formData = await request.formData();

    let  authData = {
      email:formData.get('email'),
      password:formData.get('password'),
      rePassword:formData.get('rePassword'),
      phone:formData.get('phone'),
      name:formData.get('name')
    };

    if(mode ==='singin'){
      authData = {
        email:formData.get('email'),
        password:formData.get('password'),
      }
    }

    const {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/${mode}`,authData);
    if(data.message==='success'){
      console.log(data)
      localStorage.setItem('token',data.token);
      return redirect('/')
    }
    console.log(data)

      return data;
}