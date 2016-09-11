import React from 'react';
import Pixel from './Pixel';

class Canvas extends React.Component {
  render() {
    const canvasArray = this.props.defaultColors;
    const rows = canvasArray.map((arr, index) => {
      const cells = arr.map((color, index) => {
        return (
          <Pixel
            key={index}
            pixelColor={color}
            cellName="canvas-cell"
          />
        );
      })
      return (
        <div key={index} className="canvas-row">
          { cells }
        </div>
      );
    });
    return (
      <div className="canvas">
        { rows }
      </div>
    );
  }
}

export default Canvas;