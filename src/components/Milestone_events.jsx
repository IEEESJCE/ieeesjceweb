import {React,useEffect} from 'react'
import '../css/milestone_events.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
function Milestone_events() {
   useEffect(() => {
     AOS.init({
       duration: 1000, // Set the duration of the animation
       once: true, // Only animate once
     })
   }, [])
  const events = [
    {
      id: 1,
      title: 'Latex Workshop',
      content:
        'LaTeX is a typesetting software used to generate professional-looking documents..',
      img: '/photos/events/latex_workshop.jpeg',
    },
    {
      id: 2,
      title: 'Bug Bounty',
      content:
        'IEEE-SJCE is delighted to welcome you all to BUG BOUNTY - An online treasure hunt!',
      img: '/photos/events/bug_bounty.jpeg',
    },
    {
      id: 3,
      title: 'Quiz-Bizz',
      content:
        'QUIZBIZZ is an event for people of all branches to test their skills and knowledge in various fields..',
      img: '/photos/events/QUIZBIZZ.jpeg',
    },
    {
      id: 4,
      title: 'Robotics 13',
      content:
        'Technology has always made life simple and robots have changed the course of our lives in unimaginable ways.',
      img: '/photos/events/robotics_13.jpeg',
    },
    {
      id: 5,
      title: 'IOT Workshop',
      content:
        'This cool, futuristic seeming sorcery is what we formally call IoT aka Internet of Things..',
      img: '/photos/events/iot.png',
    },
    {
      id: 6,
      title: 'PC Assembly',
      content: `Building a computer is fun, affordable and empowering. It's fun being able to choose all of the parts..`,
      img: '/photos/events/pc.jpg',
    },
    {
      id: 7,
      title: 'Soldering Workshop',
      content: `How is your relation-chip with electronics? Not great? Fret not! We're here to build a strong one from scratch..`,
      img: '/photos/events/soldering.jpeg',
    },
    {
      id: 8,
      title: 'SQL Bootcamp',
      content:
        'How do you fetch the second highest salary in the given database? Or, even simpler..',
      img: '/photos/events/sql.jpg',
    },
  ]
  return (
    <>
      <div className="event" id="event_part">
        <h1 className="heading" data-aos="fade">
          Milestones Events
        </h1>
        <hr className="hr-1" />
      </div>
      <div className="outer_milestone_container">
        <div className="milestone_container">
          {events.map((event) => {
            return (
              <div className="card" key={event.id} data-aos="zoom-in">
                <div className="image">
                  <img href="#" src={event.img} alt="" />
                </div>
                <div className="content">
                  <h3>{event.title}</h3>
                  <p>{event.content}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Milestone_events