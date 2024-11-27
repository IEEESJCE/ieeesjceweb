import {useEffect,React} from 'react'
import '../css/Bangalore_Flagship.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
function Bangalore_Flagship() {
   useEffect(() => {
     AOS.init({
       duration: 1000, // Set the duration of the animation
       once: true, // Only animate once
     })
   }, [])
  return (
    <div>
      <h1 className="heading" data-aos="fade">
        Bangalore Section
      </h1>
      <hr className="hr-1" />

      <p className="Bangalore_Section_p" data-aos="zoom-in">
        IEEE-SJCE has been successfully recognized by IEEE Bangalore section for
        completing its Silver Jubilee in flying colours. We have also been able
        to bag the best website award two times in a row.
      </p>
      <div className="row">
        <div className="col-md-3 col-sm-6" data-aos="zoom-in">
          <div className="serviceBox purple">
            <h3 className="title">HOUSE OF CARDS</h3>
            <p className="description">
              A simulation of a political scenario with real world problems. As
              citizens, we all have voices, but there comes a moment in history
              which rarely does, such as this. We give you the stage to come and
              speak about these problems, voice in your opinion, ideas and
              question the happenings around you. Go through the form
              descriptions very carefully and attentively.
            </p>
            <div className="register">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdstCW-NPK_sd3n7chovldbZDkAjZFc6d2rtTO8y_VAGluPjQ/viewform"
                title="Read Full"
              >
                <span>Register</span>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6" data-aos="zoom-in">
          <div className="serviceBox purple">
            <h3 className="title">IEEEXtreme 16.0</h3>
            <p className="description">
              IEEEXtreme is a global challenge in which teams of IEEE Student
              members - advised and proctored by an IEEE member, and often
              supported by an IEEE Student Branch compete against each other to
              solve a set of programming problems within a span of 24 hours.
              Don't forget to select school as "A48251 - Sri Jayachamarajendra
              College of Engineering"
            </p>
            <div className="register">
              <a href="https://xtreme.vtools.ieee.org/" title="Read Full">
                <span>Register</span>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6" data-aos="zoom-in">
          <div className="serviceBox purple">
            <h3 className="title">HAC SAC 2.0</h3>
            <p className="description">
              Did someone say hackathon? All the bright-eyed problem solvers get
              ready because Student Coordination Team – IEEE Bangalore Section
              is back with HAC SAC 2.0, a virtual hackathon. We are proud to
              bring you the second iteration of HAC SAC with prizes worth 35k
              for grabs! If you are fond of challenges then HAC SAC 2.0 is for
              you.
            </p>
            <div className="register">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeHELToMMwRYAyvdVOBvTBsHUOFXk8UONSIYrlR85oR3JmcGA/viewform"
                title="Read Full"
              >
                <span>Register</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bangalore_Flagship
