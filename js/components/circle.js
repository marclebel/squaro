import React from 'react';


class Circle extends React.Component {

    constructor(props) {
        super(props);
    }

    circleClick() {
       this.props.handler(this);
    }

    render() {
        var divStyle = {
            position : 'absolute',
            backgroundColor : (this.props.value==0)?'white':'blue',
            left : this.props.row * this.props.pxOffset + 'px',
            top : this.props.col * this.props.pxOffset + 'px',
            width : 2*this.props.radius + 'px',
            height: 2*this.props.radius + 'px',
            display : 'inline',
            border: this.props.borderSize + 'px solid #333',
            MozBorderRadius: 2*this.props.radius + 'px',
            WebkitBorderRadius: 2*this.props.radius + 'px',
            zIndex:'2'
        };

        return (
            <div className = "circle" 
                 onTouchEnd = {this.circleClick.bind(this)}
                 onClick = {this.circleClick.bind(this)}
                 style={divStyle}
                 >
            </div>
        );
    }

}

export default Circle;
