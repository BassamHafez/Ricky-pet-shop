import { redirect } from "react-router-dom";
 
 const getToken = ()=>{
    const userToken = localStorage.getItem('token');
    return userToken;
}

export const logout =()=>{
    localStorage.removeItem('token');
    return redirect('/login?mode=signin')
}


export default getToken;
