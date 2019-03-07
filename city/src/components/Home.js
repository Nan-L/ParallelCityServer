import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import sunset from '../asserts/images/sunset_vancouver.jpg';
import '../styles/Home.css';

const backgroundStyle = {
  backgroundImage: "url(" + sunset + ")",
  backgroundAttachment: "fixed",
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "115% 100%"
};

class Home extends Component {
  render() {
    return (
      <div className="home" style={backgroundStyle}>
        <Typography variant="h4" align="center" gutterBottom="true" style={{fontStyle: "italic", color: "#e1e1f4"}}>
          Embrace the stunning view of the city of Vancouver
        </Typography>
      </div>
    )
  }
}

export default Home;