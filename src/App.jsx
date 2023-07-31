import React from "react";
import "./Components/Calculation/style.css"
import { Routes, Route } from "react-router-dom";
import Head from "./Components/Head";
import CalcMonth from "./Components/Calculation/Invest";
import MarketNews from "./Components/StockNews/Marketnews";
import Mutualmain from "./Components/MutualFunds/Mutualmain";


function App() {
  return (
    <div className="App">
      <Head></Head>
      <Routes>
        <Route path="*" element={<MarketNews></MarketNews>}></Route>
        <Route path="Mutualmain" element={<Mutualmain></Mutualmain>}></Route>
        <Route path="CalcMonth" element={<CalcMonth></CalcMonth>}></Route>
      </Routes>
    </div>
  );
}

export default App;
