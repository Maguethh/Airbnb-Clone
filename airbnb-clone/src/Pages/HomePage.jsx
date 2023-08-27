import React from 'react';

import Header from "../Components/Header"
import PlaceFilter from "../Components/PlaceFilter"
import AppartModule from "../Components/AppartModule"
import Footer from "../Components/Footer"

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