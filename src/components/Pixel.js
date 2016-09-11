import React from 'react';

class Pixel extends React.Component {
  render() {
    return (
      <div
        className="color-pixel"
        style={{backgroundColor: this.props.pixelColor}}
      />
    );
  }
}

export default Pixel;
