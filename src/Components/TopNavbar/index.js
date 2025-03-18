import React from 'react'
import {useNavigate } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa'
import Cookies from 'js-cookie'
import { IoIosSearch } from 'react-icons/io'
import Popup from 'reactjs-popup'

import './TopNavbar.css'

const TopNavbar = ({ onChangeSearch, searchQuery }) => {
  const navigate =useNavigate();  // Correct place to calluseNavigate

  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    navigate('/login')  // Using navigate instead of history.replace
  }

  const onClickLog = () => {
    navigate('/')  // Using navigate instead of history.replace
  }

  return (
    <>
      <nav className="nav1 mainNavbar">
        <ul className="nav-list">
          <li className="hedaing-logo">
            <h1 className="first-heading">MOVIE</h1>
            <h1 className="sec-heading">MINGLE</h1>
          </li>
          <li className="search-container">
            <IoIosSearch className="search-icon" />
            <input
              type="search"
              className="serachBar"
              value={searchQuery}
              onChange={onChangeSearch}
              placeholder="Search ..."
            />
          </li>
          <li className="user-btn">
            <FaUserCircle className="user-prf" />
            <Popup
              trigger={
                <button className="logoutBtn" type="button">
                  Logout
                </button>
              }
              position="bottom center"
            >
              <div className="popup-content">
                <p>Are you sure you want to logout?</p>
                <button className="confirm-btn" onClick={onClickLogout}>
                  Yes
                </button>
                <button className="cancel-btn" onClick={onClickLog}>
                  No
                </button>
              </div>
            </Popup>
          </li>
        </ul>
      </nav>

      <nav className="nav1 secondNavbar">
        <ul className="nav-list">
          <li className="hedaing-logo">
            <h1 className="first-heading">MOVIE</h1>
            <h1 className="sec-heading">MINGLE</h1>
          </li>
          <li className="search-container">
            <IoIosSearch className="search-icon" />
            <input
              type="search"
              className="serachBar"
              value={searchQuery}
              onChange={onChangeSearch}
              placeholder="Search ..."
            />
          </li>
          <li className="user-btn">
            <FaUserCircle className="user-prf" />
            <Popup
              trigger={
                <button className="logoutBtn" type="button">
                  Logout
                </button>
              }
              position="bottom center"
            >
              <div className="popup-content">
                <p>Are you sure you want to logout?</p>
                <button className="confirm-btn" onClick={onClickLogout}>
                  Yes
                </button>
                <button className="cancel-btn" onClick={onClickLog}>
                  No
                </button>
              </div>
            </Popup>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default TopNavbar;  