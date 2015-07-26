var Square = React.createClass({displayName: "Square",
  render: function() {
    return (
      React.createElement("div", {className: "square"}, 
        "Hello, world! I am a square number ", this.props.number, "."
      )
    );
  }
});

var Circle = React.createClass({displayName: "Circle",
  render: function() {
    return (
      React.createElement("div", {className: "circle"}, 
        "Hello, world! I am a circle value ", this.props.value, "."
      )
    );
  }
});


var Grid = React.createClass({displayName: "Grid",

    handleClick: function(i) {
        console.log('You clicked: ' + this.props.data[i]);
    },
    render: function() {
       return (
       React.createElement("div", {className: "grid"}, 
      	 this.props.data.map(function(value, i) {
          return (
            React.createElement(Circle, {handler: this.handleClick, key: i, value: value})
          );
        }, this), 
        "Hello, world! I am a grid.", 
        React.createElement(Square, {number: "3"}), 
        React.createElement(Square, {number: "2"}), 
        React.createElement(Square, {number: "1"}), 
        React.createElement(Square, {number: "3"})
      )
    );
  }
});

React.render(
  React.createElement(Grid, {data: [1,0,1,0,0,1]}),
  document.getElementById('app')
);