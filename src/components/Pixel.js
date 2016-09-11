import React from 'react';

class Pixel extends React.Component {
  render() {
    return (
      <div
        className={this.props.cellName}
        style={{backgroundColor: this.props.pixelColor}}
      />
    );
  }
}

export default Pixel;
