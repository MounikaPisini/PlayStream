
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { RingLoader } from 'react-spinners';
import axios from 'axios';
import { AiFillLike, AiFillDislike, AiFillSave } from 'react-icons/ai';
import SideNavbar from '../SideNavbar';
import TopNavbar from '../TopNavbar';
import './index.css';

const MoviesDetails = () => {
  const { id } = useParams(); // useParams to get the route parameter
  const [videos, setVideos] = useState(null);
  const [error, setError] = useState(null);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Fetching the movie inside useEffect to avoid dependency issues
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(
          `https://movies-data-api.vercel.app/movies/${id}`
        );
     
        setVideos(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchMovie(); 
  }, [id]); 
  const likeBtnPressed = () => {
    setLiked(true);
    setDisliked(false);
  };

  const dislikeBtnPressed = () => {
    setDisliked(true);
    setLiked(false);
  };

  const saveBtnPressed = () => {
    setSaved(!saved);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }
  console.log(videos)

  return (
    <div className="homedetail-container">
      <TopNavbar />
      <div className="aline-flex">
        <SideNavbar />
        <div className="home-loader">
          {isLoading ? (
            <div className="loader-container">
              <RingLoader height={50} width={50} color="#00BFFF" />
            </div>
          ) : (
            videos && (
              <div className="movie-details">
                <div className="movie-comments-card">
                  <div className="trailer-container">
                    <iframe
                      title="movie-trailer"
                      width="95%"
                      height="500"
                      src={videos.movie_trailer}
                      allowFullScreen
                      className="iframe"
                    />
                  </div>
                  <div className="alldetails">
                    <div className="detail-card">
                      <div>
                        <img
                          src={videos.channel.profile_image_url}
                          alt={videos.channel.profile_image_url}
                          className="channelname-icon"
                        />
                      </div>
                      <div className="details">
                        <p className="video-Title">{videos.title}</p>
                        <p className="video_channelname">{videos.channel.name}</p>
                        <div className="view-count-date">
                          <p className="viewcount">{videos.view_count} Views</p>
                          <p className="date">{videos.published_at}</p>
                        </div>
                      </div>
                    </div>

                    <div className="liked-save-dislike-card">
                      <div className="space">
                        <button
                          onClick={likeBtnPressed}
                          className={liked ? 'active' : ''}
                          type="button"
                        >
                          <AiFillLike className="liked-icon" />
                        </button>
                      </div>
                      <div className="space">
                        <button
                          onClick={dislikeBtnPressed}
                          className={disliked ? 'active' : ''}
                          type="button"
                        >
                          <AiFillDislike className="disliked-icon" />
                        </button>
                      </div>
                      <div className="space">
                        <button
                          onClick={saveBtnPressed}
                          className={saved ? 'active' : ''}
                          type="button"
                        >
                          <AiFillSave className="save-icon" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="comment-cards">
                  <h2>Comments</h2>
                  {videos.comments && videos.comments.length > 0 ? (
                    videos.comments.map((comment) => (
                      <div key={comment.name_of_viewer} className="comments-data">
                        <div className="comment-profile">
                          <p className="profile-image">
                            {comment.profile_image_url}
                          </p>
                        </div>
                        <div className="commentsdetails">
                          <p className="people-comments">{comment.name_of_viewer}</p>
                          <p className="people-comments">{comment.how_much_days_ago} ago</p>
                          <p className="people-comments">
                            {comment.comment_description}
                          </p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p>No comments yet.</p>
                  )}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default MoviesDetails;
