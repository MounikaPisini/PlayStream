import {Component} from 'react'
import axios from 'axios'
import {RingLoader} from 'react-spinners'
import {Link} from 'react-router-dom'
import TopNavbar from '../TopNavbar'
import SideNavbar from '../SideNavbar'
import NotFound from '../NotFound'
import './index.css'

class Courses extends Component {

  state = {
    videos: [],
    searchQuery: '',
    error: null,
    isLoading: true,
  }

  componentDidMount() {
    this.fetchVideos()
  }

  onChangeSearch = event => {
    this.setState({searchQuery: event.target.value})
  }

  fetchVideos = async () => {
    try {
      const response = await axios.get(
        'https://courses-data-api.vercel.app/courses',
      )
      this.setState({videos: response.data, isLoading: false})
    } catch (error) {
      this.setState({error: error.message, isLoading: false})
    }
  }

  getFilteredVideos = () => {
    const {videos, searchQuery} = this.state
    return videos.filter(video =>
      video.title.toLowerCase().includes(searchQuery.toLowerCase()),
    )
  }

  render() {
    const {searchQuery, error, isLoading} = this.state
    const filteredVideos = this.getFilteredVideos()

    return (
      <div className="home-container">
        <TopNavbar
          onChangeSearch={this.onChangeSearch}
          searchQuery={searchQuery}
        />

        <div className="home-loader">
          <SideNavbar />
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
                    to={`/courses/${video.id}`}
                    className="link-items"
                    key={video.id}
                  >
                    <li>
                      <div className="view-video-card ">
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
                            <p className="video_channelname">
                              {video.channel.name}
                            </p>
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
        </div>
      </div>
    )
  }
}

export default Courses 