import {React,useEffect} from 'react'
import '../css/board.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
// import '../css/index.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
function Board() {
   useEffect(() => {
     AOS.init({
       duration: 1000, // Set the duration of the animation
       once: true, // Only animate once
     })
   }, [])
  return (
    <div>
      <Navbar />

      <h1 className="heading">BOARDS</h1>
      <hr className="hr-1" />
      <div className="topic_div">
        <h3 className="small_heading" id="board_web_dev_id">
          WEB DEVELOPMENT BOARD
        </h3>
      </div>
      <div className="wd_p">
        <iframe
          className="svg_gif"
          src="https://lottie.host/?file=dc229b20-4a86-4c49-b454-7a5023d86ab8/o7qpAuynA7.json"
          title="Animation"
        ></iframe>
        <p >
          <section data-aos="zoom-in">
          Web Development board, an important wing of IEEE-SJCE is an exclusive
          committee for designing and maintaining the website and web pages of
          IEEE-SJCE, its events, and spread its motto. For us, WDB is a place
          where students from various disciplines of the campus meet together to
          put their creativity to work and design web pages and host them on the
          web securely.
          </section>
          <br />
          <br />
          <img
            src="/photos/members/student-photo-web-dev.jpg"
            alt=""
            className="img2"
          />
          <br />
          <br />
          <br />
          <section data-aos="zoom-in">
          It also encourages the students on the campus to learn languages for
          web hosting like HTML, CSS, JavaScript, HTML(server-side scripting) by
          conducting many technical sessions on them throughout the year, which
          are hosted by our core committee members.
          </section>
          <br />
          <br />
          <section data-aos="zoom-in">
          Over the years, WDB has turned in to be an integral part of
          IEEE-SJCE, due to the growing importance of the web in recent years as
          it is shaping up as the best source of information. We, at WDB, hope
          to strengthen the knowledge of web designing and hosting among the
          students to a greater extent and work as a team to bring in web pages
          to create zing and get an overwhelming response from the people in our
          organization and its events.
          </section>
        </p>
      </div>

      <h3 className="small_heading" id="board_ed_id">
        EDITORIAL BOARD
      </h3>

      <div className="ed_p">
        <iframe
          className="svg_gif"
          src="https://lottie.host/?file=9d286e82-2e6b-4c8c-b925-b1b8ee052744/dBXmGwKKCY.json"
          title="Animation"
        ></iframe>
        <p>
          <section data-aos="zoom-in">
          At the IEEE EdBoard, we strive to present interesting news and
          articles about the latest trends and discoveries in the technology
          field, while also providing a voice for IEEE-SJCE, its members, and
          the students.
          </section>
          <br />
          <br />
          {/* <!-- <img src="b2.jpg" alt="" className="img4"> --> */}
          <section data-aos="zoom-in">
          We publish three editions of the IEEE Interface magazine, every year:
          the Orientation edition, about IEEE-SJCE's events, workshops, etc; the
          Tuxedo edition, about the Open Source Software Revolution; and, the
          Cyberia Edition, which covers a wide array of the latest and greatest
          news related to technology.
          </section>
          <br />
          <br />
        </p>
      </div>

      <h3 className="small_heading" id="board_magazine">Annual Magazine</h3>
      <div className="magzine_div">
        <p className="magzine_p">
          <section data-aos="zoom-in">
          We at IEEE SJCE are thrilled to announce that our much-anticipated
          magazine "Interface 2022" is in now! We hope you like this edition.
          This newer edition has got it all: from edifying articles to preparing
          for interviews! Do check in our magazine now!
          </section>
        </p>

        <div className="magzine_thumbnail_div">
          <a href="https://drive.google.com/file/d/1LCHJoy6sXg5IC3mZTSvX1WoSFKEJURc9/view?usp=sharing">
            <img src="/photos/events/magazine.png" alt="" />
          </a>
        </div>
        <a
          href="./IEEE Magazine.pdf"
          download="IEEE-Magazine"
          target="_blank"
          rel="noreferrer"
          id="btn_2"
        >
          <button className="btn">Download</button>
        </a>
      </div>

      <Footer />
    </div>
  )
}

export default Board
