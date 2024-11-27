import {React,useEffect} from 'react'
import '../css/flagship.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
function Flagship() {
   useEffect(() => {
     AOS.init({
       duration: 1000, // Set the duration of the animation
       once: true, // Only animate once
     })
   }, [])
    const data = [
      {
        id: 1,
        heading: 'IEEE R10 HTC',
        link: 'https://attend.ieee.org/r10htc-2021/',
        content:
          'IEEE Region 10 Humanitarian Technology Conference (R10 HTC) is a premier annual cross-disciplinary conference. It provides a common platform for engineers, technologists, scientists, representatives from NGOs, governments, academia, industry and investors to discuss recent advances in Humanitarian Technologies.',
      },
      {
        id:2,
        heading: 'IEEE BTC',
        content:
          'Welcome to the 2nd edition of IEEE Bangalore Technology Conclave (BTC) on the theme Clean Technologies for a Sustainable World. IEEE BTC 2021 is a flagship event of IEEE Bangalore Section, organized in collaboration with its two affinity groups - Women in Engineering (WiE) and Young Professionals (YP).',
        link: 'https://btc-2021.ieeebangalore.org/',
      },
      {
        id:3,
        heading: 'IEEE Conecct',
        content:
          'International Conference on Electronics, Computing and Communication Technologies, CONECCT is a flagship conference of the IEEE Bangalore Section, India. The conference features plenary talks, workshops and invited papers by distinguished researchers and technologists',
        link: 'https://ieee-conecct.org/',
      },
      {
        id:4,
        heading: 'IEEE SPS',
        content:
          `{The highlights of the IEEE SPS forum are as follows:\n ● It is aimed at networking in the area of Image and Video Signal Processing to industry members.\n● Bridge the gap between Industry and Educational Institution.\n● It consists of presentations, lectures, and demos by industry experts.}`,
        link: 'https://sps-2021.ieeebangalore.org/index.html',
      },
      {
        id:5,
        heading: 'IEEE CPS',
        content:
          'Cyber-Physical Systems (CPS) are integrations of computation, networking, and physical processes. In cyber-physical systems, computers and networks monitor and control the physical processes, with feedback loops where physical processes affect computations and vice versa. CPS has the ability to support complex behaviours of systems and networks.',
        link: 'https://cps-2021.ieeebangalore.org/index.html',
      },
      {
        id:6,
        heading: 'IEEE B-HTC 2022',
        content:'The IEEE B-HTC 2022 is a flagship event of IEEE Bangalore Section. It is held annually as part of the Humanitarian outreach program of the Section where technologists, innovators, entrepreneurs, and thought leaders share their passion in addressing the pressing problems, and share vision on futuristic technologies that will/may disrupt/impact our way of working and living.',
        link: 'https://bhtc-2022.ieeebangalore.org/',
      },
    ]
  return (
    <div>
      <h1 className="heading" data-aos="fade">
        Flagship Events
      </h1>
      <hr className="hr-1" />
      <div className="flagship">
        {data.map((item) => {
          return (
            <div className="flagship_card" key={item.id} data-aos="zoom-in">
              <h2 className="flagship_heading">{item.heading}</h2>
              <p className="flagship_content">{item.content}</p>
              <a href={item.link} className="flagship_link">
                Know More
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Flagship
