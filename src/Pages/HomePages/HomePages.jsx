import "./HomePages.css";
import React from 'react'
import Hero from "../../Components/Main/Hero/Hero";
import SectionOne from "../../Components/Main/SectionOne/SectionOne";
import SectionTwo from "../../Components/Main/SectionTwo/SectionTwo";
import SectionThree from "../../Components/Main/SectionThree/SectionThree";

function HomePages() {
  return (
    <div>
        <Hero/>
        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
    </div>
  )
}

export default HomePages