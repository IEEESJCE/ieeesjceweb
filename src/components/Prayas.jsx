import {React,useEffect} from 'react'
import '../css/prayas.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
function Prayas() {
   useEffect(() => {
     AOS.init({
       duration: 1000, // Set the duration of the animation
       once: true, // Only animate once
     })
   }, [])  

    const active=document.getElementsByClassName('prayas_active_para')
    const handleClick=(e)=>{
        console.log(e.target.nextElementSibling.nextElementSibling)
        // console.log(active)
        active[0].classList.remove('prayas_active_para');
        
        e.target.nextElementSibling.nextElementSibling.classList.add('prayas_active_para');
    }
    return (
      <div>
        <h1 className="heading" data-aos="fade">
          Prayas
        </h1>
        <hr className="hr-1" />
        <p className="paragraph" data-aos="zoom-in">
          PRAYAS is an outreach program by IEEE-SJCE WIE that provides
          inequitable education outcomes to underprivileged children. The
          volunteers visited an Orphanage every week to interact with the
          students and help them out in their academic activities
        </p>
        <div className="prayas">
          <div className="section_prayas">
            <h2 className="small_heading prayas_title" onClick={handleClick}>
              About Prayas
            </h2>
            <hr className="prayas_hr" />
            <p className="prayas_para prayas_active_para">
              An effort by our team to provide underprivileged students with a
              positive learning environment that will help them unleash their
              potential.
              <br /> ▪ This includes frequent visits to Divya Deepa and Vijaya
              Educational Institution.
              <br /> ▪ We will be helping the kids with functional English and
              Extracurricular activities.
            </p>
          </div>
          <div className="section_prayas">
            <h2 className="small_heading prayas_title" onClick={handleClick}>
              What we do in Prayas
            </h2>
            <hr className="prayas_hr" />
            <p className="prayas_para">
              ▪ Support in academics.
              <br /> ▪ Introduce fun learning techniques. <br />▪ Aim to achieve
              overall development.
            </p>
          </div>
          <div className="section_prayas">
            <h2 className="small_heading prayas_title" onClick={handleClick}>
              Why Prayas
            </h2>
            <hr className="prayas_hr" />
            <p className="prayas_para">
              ▪ Work satisfaction.
              <br /> ▪ Adds value to your profile. <br />▪ Best platform to
              develop communication with society.
              <br /> ▪ A good start or continuity of your interest to serve the
              society
            </p>
          </div>
        </div>
      </div>
    )
}

export default Prayas
