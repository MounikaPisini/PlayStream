

import React, {Component} from 'react'
import axios from 'axios'
import {RingLoader} from 'react-spinners'
import {Link} from 'react-router-dom'
import TopNavbar from '../TopNavbar'
import SideNavbar from '../SideNavbar'
import NotFound from '../NotFound'
import './index.css'

class Movies extends Component {
  state = {
    videos: [],
    isLoading: true,
    error: null,
    searchQuery: '',
  }

  componentDidMount() {
    this.fetchVideos()
  }

  fetchVideos = async () => {
    try {
      const response = await axios.get(
        'https://movies-data-api.vercel.app/movies',
      )
      this.setState({videos: response.data, isLoading: false})
    } catch (error) {
      this.setState({error: error.message, isLoading: false})
    }
  }

  onChangeSearch = event => {
    this.setState({searchQuery: event.target.value})
  }

  getFilteredVideos = () => {
    const {videos, searchQuery} = this.state
    return videos.filter(video =>
      video.title.toLowerCase().includes(searchQuery.toLowerCase()),
    )
  }

  renderContent = () => {
    const {error} = this.state
    const filteredVideos = this.getFilteredVideos()

    if (error) {
      return <div>Error: {error}</div>
    }

    if (filteredVideos.length === 0) {
      return <NotFound />
    }

    return (
      <ul className="allview-card">
        {filteredVideos.map(video => (
          <Link to={`/movies/${video.id}`} className="link-items" key={video.id}>
            <li>
              <div className="view-video-card">
                <img
                  src={video.movie_img}
                  alt={video.channel.name}
                  className="movie_img"
                />

                <div className="detail-card">
                  <div>
                    <img
                      src={video.channel.profile_image_url}
                      alt={video.channel.name}
                      className="channelname-icon"
                    />
                  </div>
                  <div className="details">
                    <p className="video-Title">{video.title}</p>
                    <p className="video_channelname">{video.channel.name}</p>
                    <div className="view-count-date">
                      <p className="viewcount">{video.view_count} Views</p>
                      <p className="date">{video.published_at}</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading, searchQuery} = this.state

    return (
      <div className="home-container">
        <TopNavbar
          onChangeSearch={this.onChangeSearch}
          searchQuery={searchQuery}
        />
        <SideNavbar />
        <div className="home-loader">
          {isLoading ? (
            <div className="loader-container">
              <RingLoader
                height={50}
                width={50}
                color="#00BFFF"
                aria-label="tail-spin-loading"
              /> 
            </div>
          ) : (
            this.renderContent()
          )}
        </div>
      </div>
    )
  }
}

export default Movies
