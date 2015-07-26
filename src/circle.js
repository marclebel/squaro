var React = require('react');

module.exports =  React.createClass({

    handleClick: function () {
        this.props.handler(this);
    },

    render: function() {
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
                 onClick = {this.handleClick}
                 style={divStyle}
                 >
            </div>
    );
  }

});
