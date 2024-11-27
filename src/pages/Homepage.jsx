import {React,useEffect} from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Confetti from 'react-confetti'
import Event from '../components/Event'
import styled from 'styled-components'
import Past_events from '../components/Past_events'
import '../css/index.css'
import Caraousel from '../components/Caraousel'
import Stand_for from '../components/Stand_for' 
import Milestone_events from '../components/Milestone_events'
import Achievements from '../components/Achievements'
import Bangalore_Flagship from '../components/Bangalore_Flagship'
import Flagship from '../components/Flagship'
import Prayas from '../components/Prayas'
import Mentors from '../components/Mentors'
import Sponsor from '../components/Sponsor'
import Footer from '../components/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'
function Homepage() {
   useEffect(() => {
     AOS.init({
       duration: 1300, // Set the duration of the animation
       once: true, // Only animate once
     })
   }, [])
  return (
    <Container>
      <Navbar />
      <Banner />
      <Confetti height={window.innerHeight} width={window.innerWidth} />
      <div className="introduction" id="introduction_part">
        <div className="first-heading">
          <h2 data-aos="zoom-in">
            Experience the joy of learning with IEEE-SJCE!
          </h2>
        </div>
        <div className="second-heading" data-aos="zoom-in">
          <h2 className='largeScreen'>IMAGINE ! - INNOVATE ! - INSPIRE !</h2>
          <h2 className='smallScreen'>IMAGINE ! INNOVATE ! INSPIRE !</h2>
        </div>
        <div>
          <p className="paragraph" data-aos="zoom-in">
            IEEE-SJCE conducts many events regularly for students to gain
            knowledge and encourages them to take active part in all of them.
          </p>
        </div>
      </div>
      <Event />
      <Caraousel />
      <Past_events />
      <Milestone_events />
      <Achievements />
      <Stand_for />
      <Bangalore_Flagship />
      <Flagship />
      <Prayas />
      <Mentors />
      <Sponsor />
      <Footer />
    </Container>
  )
}

const Container = styled.div`
  /* Introduction */

  .introduction {
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;

    .first-heading h2 {
      text-align: center;
      font-family: sans-serif;
      font-size: 1.9rem;
      color: white;
      letter-spacing: 0.1rem;
      margin-top: 2%;
      color: #b8c0e7;
    }

    .second-heading h2 {
      padding: auto;
      text-align: center;
      font-size: 2.5rem;
      font-weight: 750;
      letter-spacing: 0.01rem;
      font-family: sans-serif;
      color: #2085de;
      animation: lights 5s 750ms linear infinite;
      /* -webkit-text-stroke: 0.5px black; */
    }

  }
  @keyframes lights {
    0% {
      color: hsl(230, 40%, 80%);
      text-shadow: 0 0 1em hsla(320, 100%, 50%, 0.2),
        0 0 0.125em hsla(320, 100%, 60%, 0.3),
        -1em -0.125em 0.5em hsla(40, 100%, 60%, 0),
        1em 0.125em 0.5em hsla(200, 100%, 60%, 0);
    }

    30% {
      color: hsl(230, 80%, 90%);
      text-shadow: 0 0 1em hsla(320, 100%, 50%, 0.5),
        0 0 0.125em hsla(320, 100%, 60%, 0.5),
        -0.5em -0.125em 0.25em hsla(40, 100%, 60%, 0.2),
        0.5em 0.125em 0.25em hsla(200, 100%, 60%, 0.4);
    }

    40% {
      color: hsl(230, 100%, 95%);
      text-shadow: 0 0 1em hsla(320, 100%, 50%, 0.5),
        0 0 0.125em hsla(320, 100%, 90%, 0.5),
        -0.25em -0.125em 0.125em hsla(40, 100%, 60%, 0.2),
        0.25em 0.125em 0.125em hsla(200, 100%, 60%, 0.4);
    }

    70% {
      color: hsl(230, 80%, 90%);
      text-shadow: 0 0 1em hsla(320, 100%, 50%, 0.5),
        0 0 0.125em hsla(320, 100%, 60%, 0.5),
        0.5em -0.125em 0.25em hsla(40, 100%, 60%, 0.2),
        -0.5em 0.125em 0.25em hsla(200, 100%, 60%, 0.4);
    }

    100% {
      color: hsl(230, 40%, 80%);
      text-shadow: 0 0 1em hsla(320, 100%, 50%, 0.2),
        0 0 0.125em hsla(320, 100%, 60%, 0.3),
        1em -0.125em 0.5em hsla(40, 100%, 60%, 0),
        -1em 0.125em 0.5em hsla(200, 100%, 60%, 0);
    }
  }
  .smallScreen{
    display: none;
  }

  @media screen and (max-width: 750px) {
    .introduction {
      .heading h2 {
        padding: 0% 2%;
        font-family: Montserrat, sans-serif;
        font-size: 1.1rem;
        text-align: center;
        color: white;
        letter-spacing: 0.08rem;
        margin: 0px;
      }
      .second-heading {
        padding: 0% 5%;
        font-size: 0.8rem;
        font-weight: 500;
        color: #0077b6;
        -webkit-text-stroke: 0.5px black;
      }
    }
  }
  @media screen and (max-width: 800px) {
    .smallScreen{
      display: block;
    }
    .largeScreen{
      display: none;
    }
  }
`
export default Homepage