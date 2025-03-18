
import { Component } from 'react';
import { RingLoader } from 'react-spinners';
import TopNavbar from '../TopNavbar';
import SideNavbar from '../SideNavbar';
import './index.css'; // Ensure your styles are in the correct CSS file

class SavedVideos extends Component {
  state = {
    isLoading: true,
  };

  componentDidMount() {
    // Simulate an API call with setTimeout
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 3000); // 3 seconds delay to simulate loading
  }

  render() {
    const { isLoading } = this.state;

    return (
      <div className="home-container">
        <TopNavbar />
        <SideNavbar />
        <div className="content-container">
          {isLoading ? (
            <div className="loader-container">
              <RingLoader height={50} width={50} color="#00BFFF" aria-label="tail-spin-loading" />
            </div>
          ) : (
            <div className="image-card">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHHT_epGbmJxWLuk4JJULcamf1gHj6G-mu3g&s"
                alt="No Data"
                className="nodata-container"
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default SavedVideos;
