import React from 'react';
import Pixel from './Pixel';

class Palette extends React.Component {
  render() {
    const palettePixels = this.props.colors.map((color, index) => {
      return (
        <Pixel
          key={index}
          pixelColor={color}
          cellName="palette-cell"
        />
      )
    })
    return (
      <div className="palette">
        { palettePixels }
      </div>
    );
  }
}

export default Palette;
