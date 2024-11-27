import {React,useEffect} from 'react'
import '../css/event.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
function Event() {
   useEffect(() => {
     AOS.init({
       duration: 900, // Set the duration of the animation
       once: true, // Only animate once
     })
   }, [])
  return (
    <div>
      <div className="event" id="event_part">
        <h1 className="heading" data-aos="fade">
          Upcoming Events
        </h1>
        <hr className="hr-1" />
      </div>

      <div className="new_event" id="new_event_1" data-aos="zoom-in">
        <img
          src="/photos/events/wdb-recruitment.jpeg"
          alt=""
          data-aos="zoom-in"
        />

        {/* <div className="inside_box">
          <h1> WDB Recruitment</h1>
          <p data-aos="zoom-in">
            Hola coders! 🙌
            <br />
            Greetings from IEEE-SJCE! ✨
            <br />
            <br />
            The RAS wing of IEEE-SJCE presents its annual event
            <br />
            <br />
            <b style={{ color: '#0095da' }}>👨‍💻 Python Bootcamp 👩‍💻 </b>
            <br />
            <br />
            Are you a student aiming to kickstart your programming journey? 🤩
            <br />
            <br />
            The Python Bootcamp provides a well-organized approach for learning
            to program in Python. 👩‍💻
            <br />
            This bootcamp is designed for beginners seeking to develop strong
            coding skills. 🥳
            <br />
            <br />
            The ability to program in Python gives prospective developers access
            to a multitude of job opportunities, from scripting to data science.
            🤯 
            <br />
            <br />
            Join us and unlock the potential of Python for your coding journey!
            <br />
            <br />
            <b style={{ color: '#0095da' }}>Registration is FREE! 🎉</b>
            <br />
            <br />
            🗓 Date:{' '}
            <b style={{ color: '#0095da' }}>9th, 10th & 11th February</b>
            <br />
            📍 Platform : <b style={{ color: '#0095da' }}>Google Meet</b>
            <br />
            <br />
            Sign up now! 🤩
            <br />
            <br />
            For any queries, contact:
            <br />
            Sudhanva: +91 <b style={{ color: '#0095da' }}> 7619618003</b>
            <br />
            Rishabh: +91 <b style={{ color: '#0095da' }}> 6201165099</b>
            <br />
          </p>
          <button className="btn">
            {' '}
            <a
              style={{ textDecoration: 'none', color: 'white' }}
              href="https://bit.ly/PYTHON_BOOTCAMP_2024"
            >
              Register Now
            </a>
          </button>
        </div> */}
        <div className="inside_box">
          <h1>WDB Recruitment</h1>
          <p data-aos="zoom-in">
            Passionate about web development? Ready to explore new opportunities
            in this field? Let your creativity shine with us! 🎉
            <br />
            <br />
            We are looking for enthusiastic web developers to join the Web
            Development Board of IEEE-SJCE. 👩‍💻
            <br />
            <br />
            Requirements: Knowledge of HTML, CSS, and JavaScript. Familiarity
            with NodeJs and ReactJS is a plus. 😇
            <br />
            <br />
            Open to second-year students only.
            <br />
            <br />
            If you're interested, please complete the Google Form:
            <br />
            <br />
            Become a part of IEEE-SJCE and start an exciting journey with our
            club!
            <br />
            <br />
            Apply by July 23, 2024.
            <br />
            <br />
            For more information, contact:
            <br />
            Subroto: <b style={{ color: '#0095da' }}>9065619225</b>
          </p>
          <button className="btn">
            <a
              style={{ textDecoration: 'none', color: 'white' }}
              href="https://bit.ly/IEEE_SJCE_WEB_DEVELOPMENT_REGISTRATION"
            >
              Register Now
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Event;
