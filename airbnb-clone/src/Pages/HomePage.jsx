import React from 'react';
import { Link } from 'react-router-dom';

import Header from "../Components/Header"
import PlaceFilter from "../Components/PlaceFilter"
import AppartModule from "../Components/AppartModule"
import Footer from "../Components/Footer"
import LoginModal from "../Modal/LoginModal"

const Home = () => {
  return (
    <div>
       <Header />
       <PlaceFilter />
       <AppartModule />
      <Footer/>
    </div>
  );
}

export default Home;