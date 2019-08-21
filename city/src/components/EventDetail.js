import React, { Component } from 'react';



class EventDetail extends Component {
  renderDate() {
    const date = new Date(this.props.startDate);
    return <p>{date.getFullYear()}-{date.getMonth()}-{date.getDate()}</p>
  }

  arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => binary += String.fromCharCode(b));
    return window.btoa(binary);
  };

  renderImage() {
      const base64Flag = 'data:' + this.props.img.contentType + ';base64,';
      const imageStr = base64Flag + this.arrayBufferToBase64(this.props.img.data.data);
      return <img src={imageStr} alt=''/>;

  }

  render() {
    return (
      <div className="eventDetail">
        <p>{this.props.title}</p>
        <p>{this.props.desc}</p>
        {this.renderDate()}
        {this.renderImage()}
      </div>
    )
  }
}

export default EventDetail;