import {React,useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../css/profilecard.css'

function profilecard(props) {
  
  return (
    <div key={props.id}>
      <div className="profile_card_container">
        
          <div className="col-md-4 col-sm-6">
            <div className="our-team">
                <div className="team-image">
                    <img src={props.photo.src}/>
                    <ul className="social">
                        <li><a href={props.photo.linkedin} className="fab fa-linkedin"><i className="fa fa-linkedin" aria-hidden="true"/></a></li>
                      <li><a href={`mailto:${props.photo.gmail}`} ><i className="fa fa-envelope" aria-hidden="true"/></a></li>
                    </ul> 
                </div>
                <div className="team-content">
                    <h3 className="title">{props.photo.name}</h3>
                    <p className="description">{props.photo.post}</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default profilecard
