import React from 'react';
import styles from './LoginButton.module.css';
import { useRouteLoaderData } from 'react-router-dom';

const LoginButton = () => {
const token = useRouteLoaderData('root');

  return (
    <button className={styles.login}>
        {token?'logout':'login'}
    </button>
  )
}

export default LoginButton
