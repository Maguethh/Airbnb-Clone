import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Appart from '../Pages/Appart'


const Routes = () => {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route path="/Appart" component={Appart} />
    </>
  );
}

export default Routes;
