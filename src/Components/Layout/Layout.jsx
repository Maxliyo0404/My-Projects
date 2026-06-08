import "./Layout.css";
import React from 'react'
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="layout">
        <main>
            <Header/>
            <Outlet/>
        </main>
    </div>
  )
}

export default Layout