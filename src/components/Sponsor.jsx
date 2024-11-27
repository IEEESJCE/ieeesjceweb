import {React,useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../css/sponsor.css'
export default function Sponsor() {
   useEffect(() => {
     AOS.init({
       duration: 1000, // Set the duration of the animation
       once: true, // Only animate once
     })
   }, [])
  return (
    <div className="slide_container">
      <h1 className="heading" data-aos="fade">
        Our Sponsors
      </h1>
      <hr className="hr-1" />
      <div className="scroll-parent">
        <div className="scroll-element primary">
          <img src="/photos/sponsors/10.png" alt="damilola jerugba" />
          <img src="/photos/sponsors/11.png" alt="tosin jerugba" />
          <img src="/photos/sponsors/12.png" alt="fiyin jerugba" />
          <img src="/photos/sponsors/13.png" alt="feyikemi jerugba" />
          <img src="/photos/sponsors/14.png" alt="femi jerugba" />
          <img src="/photos/sponsors/15.png" alt="damilola jerugba" />
          <img src="/photos/sponsors/16.png" alt="tosin jerugba" />
          <img src="/photos/sponsors/17.png" alt="fiyin jerugba" />
          <img src="/photos/sponsors/18.png" alt="feyikemi jerugba" />
          <img src="/photos/sponsors/19.png" alt="femi jerugba" />
        </div>
        <div className="scroll-element secondary">
          <img src="/photos/sponsors/10.png" alt="damilola jerugba" />
          <img src="/photos/sponsors/11.png" alt="tosin jerugba" />
          <img src="/photos/sponsors/12.png" alt="fiyin jerugba" />
          <img src="/photos/sponsors/13.png" alt="feyikemi jerugba" />
          <img src="/photos/sponsors/14.png" alt="femi jerugba" />
          <img src="/photos/sponsors/15.png" alt="damilola jerugba" />
          <img src="/photos/sponsors/16.png" alt="tosin jerugba" />
          <img src="/photos/sponsors/17.png" alt="fiyin jerugba" />
          <img src="/photos/sponsors/18.png" alt="feyikemi jerugba" />
          <img src="/photos/sponsors/19.png" alt="femi jerugba" />
        </div>
      </div>
    </div>
  )
}
