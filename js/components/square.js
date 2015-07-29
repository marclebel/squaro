import React from 'react';
import mixin from 'es6-react-mixins';
import pure from '../mixin/pure';

class Square extends mixin(pure)  {

  render() {
    

    var borderSize = '2px';
    var borderStyle = borderSize + ' solid #333';

    var divStyle = {
            position : 'absolute',
            left : this.props.pxOffset + this.props.row * this.props.pxSize + 'px',
            top : this.props.pxOffset + this.props.col * this.props.pxSize + 'px',
            width : this.props.pxSize + 'px',
            height: this.props.pxSize + 'px',
            lineHeight: this.props.pxSize + 'px',
            borderRight: borderStyle,
            borderTop: borderStyle,
            color : (this.props.isValid) ? ('black') : ('red'),
            borderLeft : (this.props.showLeftBorder) ? borderStyle : 'none',
            borderBottom : (this.props.showBottomBorder) ? borderStyle : 'none',
            textAlign: 'center'
        };


    var numberStyle = {
            paddingLeft:borderSize,
            verticalAlign:'middle',
            fontSize : this.props.fontSize + 'px',
        }


    return (
        <div className="square" style={divStyle}>
             <span style={numberStyle}>{this.props.number}</span>
        </div>
    );
  }

}

export default Square;