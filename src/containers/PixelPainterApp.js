import React from 'react';
import { Pixel, Canvas, Palette } from '../components';
import { connect } from 'react-redux';

import { setColor } from '../actions/canvas';

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    ...state
  };
}

class PixelPainterApp extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.displayName = 'PixelPainterApp';
  }
  render() {
      return (
        <div className="app-container">
          <div className="palette-container">
            <Palette colors={this.props.palette.colors}/>
          </div>
          <div className="canvas-container">
            <Canvas defaultColors={this.props.canvas} />
          </div>
        </div>
      );
    }
}

// export default PixelPainterApp;
export default connect(mapStateToProps, {setColor})(PixelPainterApp);