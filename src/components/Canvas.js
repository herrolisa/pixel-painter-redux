import React from 'react';
import Pixel from './Pixel';

class Canvas extends React.Component {
  render() {
    const canvasArray = this.props.defaultColors;
    const rows = canvasArray.map((elem, index) => {
      const cells = elem.map((color, index) => {
        return (
          <Pixel key={index} pixelColor={color} />
        );
      })
      return (
        <div key={index} className="canvas-row">
          {cells}
        </div>
      );
    });
    return (
      <div className="canvas-container">
        {rows}
      </div>
    );
  }
}

export default Canvas;