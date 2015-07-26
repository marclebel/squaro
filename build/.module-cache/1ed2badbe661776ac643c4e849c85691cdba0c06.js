var Square = React.createClass({displayName: "Square",
  render: function() {
    return (
      React.createElement("div", {className: "square", onClick: ""}, 
        "Hello, world! I am a square number ", this.props.number, "."
      )
    );
  }
});


var Grid = React.createClass({displayName: "Grid",
  render: function() {
    return (
      React.createElement("div", {className: "grid"}, 
      	 this.props.data.map(function(value, i) {
          return (
            React.createElement("div", {onClick: this.handleClick.bind(this, i), key: i}, item)
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
  React.createElement(Grid, {data: "{1,0,1,0,0,1}"}),
  document.getElementById('app')
);