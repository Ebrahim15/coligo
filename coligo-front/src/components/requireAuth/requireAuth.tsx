import React, { useState } from 'react'
import Home from '../home/Home';

const requireAuth = (Component: any) => {
  const AuthenticatedComponent = () => {
    const [isLoggedIn, setLoggedIn] = useState(false);

    if(isLoggedIn) return <Component />
    else return <Home setLoggedIn = {setLoggedIn}/>

  };
  return AuthenticatedComponent;
};

export default requireAuth;