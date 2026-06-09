import "./HomePages.css";
import React from 'react'
import Hero from "../../Components/Main/Hero/Hero";
import SectionOne from "../../Components/Main/SectionOne/SectionOne";
import SectionTwo from "../../Components/Main/SectionTwo/SectionTwo";

function HomePages() {
  return (
    <div>
        <Hero/>
        <SectionOne/>
        <SectionTwo/>
    </div>
  )
}

export default HomePages