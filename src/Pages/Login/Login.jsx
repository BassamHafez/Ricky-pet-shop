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
      first_name:formData.get('first_name'),
      last_name:formData.get('last_name'),
      age:formData.get('age')
    };

    if(mode ==='singin'){
      authData = {
        email:formData.get('email'),
        password:formData.get('password'),
      }
    }

    const {data} = await axios.post(`https://movies-api.routemisr.com/${mode}`,authData);
    if(data.message==='success'){
      console.log(data)
      localStorage.setItem('token',data.token);
      return redirect('/')
    }
    console.log(data)

      return data;
}