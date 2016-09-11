import React from 'react';
import Pixel from './Pixel';

class Palette extends React.Component {
  render() {
    const palettePixels = this.props.colors.map((color, index) => {
      return (
        <Pixel
          key={ index }
          pixelColor={ color }
        />
      )
    })
    return (
      <div className="palette-container">
        { palettePixels }
      </div>
    );
  }
}

export default Palette;
