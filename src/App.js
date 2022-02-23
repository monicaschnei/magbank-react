import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CreditCard from "./components/CreditCard";
import CardList from "./components/CardList";
import CenteredButton from "./components/CenteredButton";
import Institutional from "./components/institutional";
import Faq2 from "./components/Faq2";
import Footer2 from "./components/Footer2";
import AccountModal from "./components/AccountModal";
import "./App.scss";

import Home2 from "./views/Home2";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <CreditCard />
      <Institutional />
      <Faq2 />
      <Footer2 />
    </>
  );
};

export default App;
