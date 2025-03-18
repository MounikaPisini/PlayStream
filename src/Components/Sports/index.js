import { Component } from 'react';
import { RingLoader } from 'react-spinners';
import TopNavbar from '../TopNavbar';
import SideNavbar from '../SideNavbar';
import './index.css'; 


class Sports extends Component {
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
                src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-616.jpg?w=740&t=st=1716616048~exp=1716616648~hmac=58ef78023efb056e34fe1ab56a5f9ec07ec517e2b6c54daeccda55d403e1e3c1"
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

export default Sports;
