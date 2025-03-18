import React, {Component} from 'react'
// import '../NotFound.css'

class NotFound extends Component {
  render() {
    return (
      <div className="home-page">
        <div className="home-page1">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
            alt="no videos"
            className="novideos"
          />
        </div>
      </div>
    )
  }
}

export default NotFound