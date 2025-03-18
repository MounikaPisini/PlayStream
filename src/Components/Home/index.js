import React, {Component} from 'react'
import axios from 'axios'
// import { TailSpin } from 'react-loader-spinner';
import {RingLoader} from 'react-spinners'
import {Link} from 'react-router-dom'
import TopNavbar from '../TopNavbar'
import SideNavbar from '../SideNavbar'
import NotFound from '../NotFound'
import './index.css'

class Home extends Component {
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
        'https://home-data-api.vercel.app/videos',
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

  render() {
    const {isLoading, error, searchQuery} = this.state
    const filteredVideos = this.getFilteredVideos()

    return (
      <div className="home-container">
        <TopNavbar
          onChangeSearch={this.onChangeSearch}
          searchQuery={searchQuery}
        />
        <SideNavbar />
        <div className="home-loader">
          {isLoading && (
            <div className="loader-container">
              <RingLoader
  height={50}
  width={50}
  color="#00BFFF"
  aria-label="tail-spin-loading"
/>
            </div>
          )}
          {!isLoading && error && <div>Error: {error}</div>}
          {!isLoading && !error && (
            <ul className="allview-card">
              {filteredVideos.length === 0 ? (
                <NotFound />
              ) : (
                filteredVideos.map(video => (
                  <Link
                    to={`/videos/${video.id}`}
                    className="link-items"
                    key={video.id}
                  >
                    <li className="styles">
                      <div className="view-video-card">
                        <img
                          src={video.thumbnail_url}
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
                              <p className="viewcount">
                                {video.view_count} Views
                              </p>
                              <p className="date">{video.published_at}</p>
                            </div>
                          </div>
                        
                        </div>
                      </div>
                    </li>
                  </Link>
                ))
              )}
              
            </ul>
            
          )}
{/*         
<script src="https://static.elfsight.com/platform/platform.js" async></script>
<div class="elfsight-app-74a5e4b0-908b-4423-9ec7-a42169f378db" data-elfsight-app-lazy></div> */}

<script src="https://static.elfsight.com/platform/platform.js" async></script>
<div class="elfsight-app-10caa1ea-3e18-4d5c-96fc-6c8bae9f74b8" data-elfsight-app-lazy></div>
        </div>
        

      </div>
    )
  }  
}

export default Home  

