import "./HomePages.css";
import React from 'react'
import Hero from "../../Components/Main/Hero/Hero";
import SectionOne from "../../Components/Main/SectionOne/SectionOne";
import SectionTwo from "../../Components/Main/SectionTwo/SectionTwo";
import SectionThree from "../../Components/Main/SectionThree/SectionThree";
import SectionFive from "../../Components/Main/SectionFive/SectionFive";
import SectionFour from "../../Components/Main/SectionFour/SectionFour";
import SectionSix from "../../Components/Main/SectionSix/SectionSix";
import SectionSeven from "../../Components/Main/SectionSeven/SectionSeven";

function HomePages() {
  return (
    <div>
        <Hero/>
        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
        <SectionFive/>
        <SectionFour/>
        <SectionSix/>
        <SectionSeven/>
    </div>
  )
}

export default HomePages