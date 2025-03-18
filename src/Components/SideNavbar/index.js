import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {
  IoHome,
  IoReorderThreeOutline,
  IoGameController,
  IoNewspaperOutline,
} from 'react-icons/io5' // Combine imports
import {FaFireAlt} from 'react-icons/fa'
import {RiMovie2Fill} from 'react-icons/ri'
import {GiTrophyCup} from 'react-icons/gi'
import {IoIosSave} from 'react-icons/io'
import './SideNavbar.css'

class SideNavbar extends Component {
  state = {
    sizeIncrese: true,
  }

  sizeChanging = () => {
    this.setState(prevState => ({
      sizeIncrese: !prevState.sizeIncrese,
    }))
  }

  render() {
    const {sizeIncrese} = this.state
    return (
      <>
        <nav
          className={`mainNavbar ${
            sizeIncrese ? 'sizeIncrease' : 'decreaseSize'
          }`}
        >
          <IoReorderThreeOutline
            className="symbolStyle-control"
            onClick={this.sizeChanging}
          />
          <ul>
            <li className="list-item">
              <Link to="/" className="link-item">
                <IoHome className="symbolStyle" />
                {sizeIncrese && <p>Home</p>}
              </Link>
            </li>
            <li className="list-item">
              <Link to="/trending" className="link-item">
                <FaFireAlt className="symbolStyle" />
                {sizeIncrese && <p>Trending</p>}
              </Link>
            </li>
            <li className="list-item">
              <Link to="/movies" className="link-item">
                <RiMovie2Fill className="symbolStyle" />
                {sizeIncrese && <p>Movies</p>}
              </Link>
            </li>
            <li className="list-item">
              <Link to="/games" className="link-item">
                <IoGameController className="symbolStyle" />
                {sizeIncrese && <p>Games</p>}
              </Link>
            </li>
            <li className="list-item">
              <Link to="/courses" className="link-item">
                <IoNewspaperOutline className="symbolStyle" />
                {sizeIncrese && <p>Courses</p>}
              </Link>
            </li>
            <li className="list-item">
              <Link to="/sports" className="link-item">
                <GiTrophyCup className="symbolStyle" />
                {sizeIncrese && <p>Sports</p>}
              </Link>
            </li>
            <li className="list-item">
              <Link to="/saved-videos" className="link-item">
                <IoIosSave className="symbolStyle" />
                {sizeIncrese && <p>Saved Videos</p>}
              </Link>
            </li>
          </ul>
          <ul
            className={
              sizeIncrese ? 'icons-img-ul-increase' : 'icons-img-ul-decrease'
            }
          >
            <img
              src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"
              alt="linkedin"
              className="icon-imgs"
            />
            <img
              src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-256.png"
              alt="Twitter"
              className="icon-imgs"
            />
            <img
              src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-256.png"
              alt="Facebook"
              className="icon-imgs"
            />
          </ul>
        </nav>

        <nav className="secondNavbar">
          <ul>
            <li className="list-item list-item-small">
              <Link to="/" className="link-item">
                <IoHome className="symbolStyle" />
              </Link>
            </li>
            <li className="list-item">
              <Link to="/trending" className="link-item">
                <FaFireAlt className="symbolStyle" />
              </Link>
            </li>
            <li className="list-item">
              <Link to="/movies" className="link-item">
                <RiMovie2Fill className="symbolStyle" />
              </Link>
            </li>
            <li className="list-item">
              <Link to="/games" className="link-item">
                <IoGameController className="symbolStyle" />
              </Link>
            </li>
            <li className="list-item">
              <Link to="/courses" className="link-item">
                <IoNewspaperOutline className="symbolStyle" />
              </Link>
            </li>
            <li className="list-item">
              <Link to="/sports" className="link-item">
                <GiTrophyCup className="symbolStyle" />
              </Link>
            </li>
            <li className="list-item">
              <Link to="/saved-videos" className="link-item">
                <IoIosSave className="symbolStyle" />
              </Link>
            </li>
          </ul>
          <ul className="icons-img-ul-decrease">
            <img
              src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"
              alt="linkedin"
              className="icon-imgs"
            />
            <img
              src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-256.png"
              alt="Twitter"
              className="icon-imgs"
            />
            <img
              src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-256.png"
              alt="Facebook"
              className="icon-imgs"
            />
          </ul>
        </nav>
      </>
    )
  }
}

export default SideNavbar