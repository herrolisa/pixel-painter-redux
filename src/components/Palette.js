import React from 'react';

class Palette extends React.Component {
  render() {
    const palettePixels = this.props.colors.map( (color, index) => {
      return (
        <div
          key={index}
          style={{backgroundColor: color}}
          className="color-pixel"
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
