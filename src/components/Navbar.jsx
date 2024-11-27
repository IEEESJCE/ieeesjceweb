import React from 'react'
import styled from 'styled-components'
import { HashLink } from 'react-router-hash-link'
import '../css/navbar.css'
function Navbar() {
  const toggle=(e)=>{
    const navbar=document.getElementsByClassName('navbar-dropdown')[0];
    navbar.classList.toggle('active');
  }
  // window.onscroll = function () {
  //   myFunction()
  // }

  // const navlist = document.getElementsByClassName('navbar')[0]

  /* Function to stick the nav bar */
  // function myFunction() {
  //   if (window.pageYOffset >= 100) {
  //     navlist.classList.add('sticky')
  //     navlist.classList.add('nav-sticky')
  //   } else {
  //     navlist.classList.remove('sticky')
  //     navlist.classList.remove('nav-sticky')
  //   }
  // }
  return (
    <NavbarContainer>
      <div className="navbar">
        <a href="/" className="logo">
          <img src="/photos/logo.png" alt="logo" id="logo_img" />
        </a>
        <div className="toggle-button" onClick={toggle}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className="navbar-dropdown">
          <li>
            <HashLink smooth to="/board" className="navbar-links">
              BOARDS
            </HashLink>
            <div className="dropdown">
              {/* <a href="./boards.html#web_id">
              </a> */}
              <HashLink
                smooth
                to="/board#board_web_dev_id"
                className="navbar-links"
              >
                <img src="/photos/vectors/web-dev.png" alt="" />
                <span>WEB-DEVELOPMENT-BOARD</span>{' '}
              </HashLink>
              <HashLink smooth to="/board#board_ed_id" className="navbar-links">
                <img src="/photos/vectors/pen.png" alt="" />
                <span>EDITORIAL BOARD</span>{' '}
              </HashLink>
              <HashLink
                smooth
                to="/board#board_magazine"
                className="navbar-links"
              >
                <img src="/photos/vectors/magazine_icon.png" alt="" />
                <span>ANNUAL MAGAZINE</span>{' '}
              </HashLink>
            </div>
          </li>
          <li>
            <HashLink smooth to="/societies" className="navbar-links">
              SOCIETIES
            </HashLink>
            <div className="dropdown">
              <HashLink
                smooth
                to="/societies#societies_student_branch_id"
                className="navbar-links"
              >
                <img src="/photos/vectors/student1.png" alt="" />
                <span>STUDENT BRANCH</span>{' '}
              </HashLink>

              <HashLink
                smooth
                to="/societies#socities_eds_id"
                className="navbar-links"
              >
                <img src="/photos/vectors/electronic.png" alt="" />
                <span>ELECTRON DEVICES SOCIETY</span>{' '}
              </HashLink>

              <HashLink
                smooth
                to="/societies#societies_wie_id"
                className="navbar-links"
              >
                <img src="/photos/vectors/woman.png" alt="" />
                <span>WOMEN IN ENGINEERING</span>{' '}
              </HashLink>

              <HashLink
                smooth
                to="/societies#societies_rds_id"
                className="navbar-links"
              >
                <img src="/photos/vectors/robotics.png" alt="" />
                <span>ROBOTICS AND AUTOMATION SOCIETY</span>{' '}
              </HashLink>
            </div>
          </li>
          <li>
            <HashLink smooth to="/team" className="navbar-links">
              TEAM
            </HashLink>
            <div className="dropdown">
              <HashLink
                smooth
                to="/team#team_execom_id"
                className="navbar-links"
              >
                <img src="/photos/vectors/executive committee.png" alt="" />
                <span>EXECUTIVE COMMITEE</span>{' '}
              </HashLink>

              <HashLink smooth to="/team#team_mdc_id" className="navbar-links">
                <img src="/photos/vectors/membership.png" alt="" />
                <span>MEMBERSHIP DRIVE COMMITEE</span>{' '}
              </HashLink>

              <HashLink
                smooth
                to="/team#team_societies_id"
                className="navbar-links"
              >
                <img src="/photos/vectors/society.png" alt="" />
                <span>SOCIETIES</span>{' '}
              </HashLink>

              <HashLink
                smooth
                to="/team#team_boards_id"
                className="navbar-links"
              >
                <img src="/photos/vectors/board.png" alt="" />
                <span>BOARDS</span>{' '}
              </HashLink>

            </div>
          </li>
          <li>
            <HashLink smooth to="/album" className="navbar-links">
              GALLERY
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/contact" className="navbar-links">
              CONTACT
            </HashLink>
          </li>
        </ul>
      </div>
    </NavbarContainer>
  )
}

const NavbarContainer = styled.div`
  
`
export default Navbar