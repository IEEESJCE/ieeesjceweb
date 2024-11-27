import {React,useEffect} from 'react'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'; 
import 'react-vertical-timeline-component/style.min.css';
import '../css/pastevent.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
function Past_events() {
  const pastEvents = [
    {
      id: 1,
      date: '20th - 22nd January 2023',
      title: 'Soldering and Etching Workshop',
      img: 'photos/events/soldering_&_etching.jpeg',
      content: `The Electron Devices Society conducted SOLDERING & ETCHING WORKSHOP, one of the flagship events of IEEE-SJCE. A 3-day event that gives students a hands-on experience of Soldering and Etching with theoretical and practical sessions.`,
    },
    {
      id: 2,
      date: '13th - 15th April 2023',
      title: 'SQL Bootcamp',
      img: 'photos/events/sql.jpg',
      content: `A 3 day online SQL Bootcamp where participants were taught the foundations of Structured Query Language - SQL. Students were tasked to build a solid backend component for the given front end! Learners were pumped up with the confidence to answer questions asked related to SQL during your placements.`,
    },
    {
      id: 3,
      date: '28th - 30th April 2023',
      title: 'IOT Workshop',
      img: 'photos/events/iot_workshop.jpeg',
      content: `A 3-day workshop with a lot of learning and interesting hands-on
              sessions.We will be covering protocols and all the other important
              theories, before moving onto the more exciting part of simulating
              them using Raspberry Pi and Node MC.`,
    },
    {
      id: 4,
      date: '31st May - 4th June 2023',
      title: 'Robotics 14',
      img: 'photos/events/robotics.jpeg',
      content: `The workshop included basics of microcontrollers,
              microprocessors,blinking onboard LED, blinking external LED,
              PWM(breathing LED), pull up and pull down concepts and interrupts
              all of these concepts were then implemented in building the
              robots.`,
    },
    {
      id: 5,
      date: '23rd September 2023',
      title: 'Prayas',
      img: 'photos/events/prayas.jpeg',
      content: `PRAYAS is an outreach program by IEEE-SJCE WIE that provides
              inequitable education outcomes to underprivileged children. The
              volunteers visited an Orphanage every week to interact with the
              students and help them out in their academic activities.`,
    },
    {
      id: 6,
      date: '3rd-5th October 2023',
      title: 'IEEE Envision',
      img: 'photos/events/ieee_envision.jpg',
      content: `On IEEE DAY, we celebrated global innovation, technology, and
              collaboration, driving progress and changing the world together.To
              celebrate this commitment, IEEE-SJCE has conducted IEEE-Envision,
              a trio event series. Here is a glimpse of the electrifying events:-
              Linux Tutelage, Coggle Mindscape, Ad-Vintage.`,
    },
    {
      id: 7,
      date: '3rd-4th November 2023',
      title: 'Fun-tastic Fiesta & Orientation Day',
      img: 'photos/events/fun_event.jpg',
      content: `Fun-tastic Fiesta was a compilation of thrilling array of events
              where freshers had an opportunity to make new connections,
              rejuvenate, get together and have fun! Through Orientation day
              freshers took the opportunity to get to know about IEEE-SJCE and
              its activities. We also held a placement talk for the freshers.`,
    },
    {
      id: 8,
      date: '28-29th November 2023',
      title: 'Snap Circuits',
      img: 'photos/events/Snap_Circuits.jpg',
      content: `The first event of Tuxedo tech-fest, Snap circuits provided a hands-on experience of electronic components and increased curiosity of electronic circuits and their working among freshers. It was an opportunity to gain knowledge and develop circuit building skills.`,
    },
    {
      id: 9,
      date: '30th November - 03rd December 2023',
      title: 'Web Dev Bootcamp',
      img: 'photos/events/web_dev_bootcamp.jpg',
      content: `The second event of Tuxedo tech-fest, Web Development Bootcamp provides students with hands-on experience in building and designing interactive websites, acquire essential web development skills. 
By the end of the workshop, students were able to build their own portfolio.`,
    },
  ]
   useEffect(() => {
     AOS.init({
       duration: 1000, // Set the duration of the animation
       once: true, // Only animate once
     })
   }, [])
  return (
    <>
      <div className="past_events_bigscreen">
        <h1 className="heading" data-aos="fade">
          Past Events
        </h1>
        <hr className="hr-1" />
        <VerticalTimeline lineColor={'rgb(147, 169, 187)'}>
          {pastEvents.map((event) => {
            return (
              <>
                {event.id % 2 === 1 ? (
                  <VerticalTimelineElement
                    key={event.id}
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: 'rgb(50, 107, 160)',
                      color: '#fff',
                      right: '5%',
                      borderRadius: '20px',
                    }}
                    contentArrowStyle={{
                      borderRight: '7px solid rgb(180, 227, 255)',
                    }}
                    date={event.date}
                    icon={<img className="event_img" src={event.img} alt="" />}
                  >
                    <h3
                      style={{ fontSize: '1.7rem' }}
                      className="vertical-timeline-element-title"
                    >
                      {event.title}
                    </h3>
                    <p style={{ fontSize: '1rem',textAlign:'justify' }}>{event.content}</p>
                  </VerticalTimelineElement>
                ) : (
                  <VerticalTimelineElement
                  key={event.id}
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: 'rgb(50, 107, 160)',
                      color: '#fff',
                      left: '5%',
                      borderRadius: '20px',
                    }}
                    contentArrowStyle={{
                      borderRight: '7px solid rgb(180, 227, 255)',
                    }}
                    date={event.date}
                    icon={<img className="event_img" src={event.img} alt="" />}
                  >
                    <h3
                      style={{ fontSize: '1.7rem' }}
                      className="vertical-timeline-element-title"
                    >
                      {event.title}
                    </h3>
                    <p style={{ fontSize: '1rem',textAlign:'justify'}}>{event.content}</p>
                  </VerticalTimelineElement>
                )}
              </>
            )
          })}

          <VerticalTimelineElement
            icon={
              <img className="event_img" src="photos/events/tl5.png" alt="" />
            }
            // icon={<StarIcon />}
          />
        </VerticalTimeline>
      </div>

      {/* for small screen */}

      <div className="past_events_smallscreen">
        <h1 className="heading">Past Events</h1>
        <hr className="hr-1" />
        <VerticalTimeline lineColor={'rgb(147, 169, 187)'} lineHeight={1.5}>
          {pastEvents.map((event) => {
            return (
              <>
                {event.id % 2 === 1 ? (
                  <VerticalTimelineElement
                    key={event.id}
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: ' rgb(50, 107, 160)',
                      color: '#fff',
                      borderRadius: '20px',
                    }}
                    contentArrowStyle={{
                      borderRight: '7px solid  rgb(180, 227, 255)',
                    }}
                    date={event.date}
                    // iconStyle={{ background: '#78b0d8;;', color: '#fff' }}
                    icon={<img className="event_img" src={event.img} alt="" />}
                  >
                    <h3 className="vertical-timeline-element-title">
                      {event.title}
                    </h3>
                    {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
                    <p>{event.content}</p>
                  </VerticalTimelineElement>
                ) : (
                  <VerticalTimelineElement
                  key={event.id}
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: ' rgb(50, 107, 160)',
                      color: '#fff',
                      borderRadius: '20px',
                    }}
                    contentArrowStyle={{
                      borderRight: '7px solid  rgb(180, 227, 255)',
                    }}
                    date={event.date}
                    // iconStyle={{ background: '#78b0d8;;', color: '#fff' }}
                    icon={
                      <img
                        className="event_img"
                        src={event.img}
                        alt=""
                      />
                    }
                  >
                    <h3 className="vertical-timeline-element-title">
                      {event.title}
                    </h3>
                    {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
                    <p>
                      {event.content}
                    </p>
                  </VerticalTimelineElement>
                )}
              </>
            )
          })}

  
          <VerticalTimelineElement
            icon={
              <img className="event_img" src="photos/gallery/tl5.png" alt="" />
            }
            // icon={<StarIcon />}
          />
        </VerticalTimeline>
      </div>
    </>
  )
}

export default Past_events
