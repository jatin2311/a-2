import React, { useEffect, useState } from "react";
// import { initializeApp } from "firebase/app";
// import { firebaseConfig } from "./config/firebase";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
const App = () => {
  return (
    <>
      <Header />
      <HomeScreen />
      <Footer />
    </>
  );
};

export default App;
