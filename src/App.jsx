import "./App.css";
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePages from "./Pages/HomePages/HomePages";
import ServicesPages from "./Pages/ServicesPages/ServicesPages";
import CompanyPages from "./Pages/CompanyPages/CompanyPages";
import Layout from "./Components/Layout/Layout";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element={<Layout/>}>
        <Route path="home" element = {<HomePages/>}/>
        <Route path="services" element = {<ServicesPages/>}/>
        <Route path="company" element = {<CompanyPages/>}/>

      </Route>
    </Routes>
       </BrowserRouter>
    
    </>
  )
}


export default App