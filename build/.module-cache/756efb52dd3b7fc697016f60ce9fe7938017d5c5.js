var Square = React.createClass({displayName: "Square",
  render: function() {
    return (
      React.createElement("div", {className: "square", onClick: ""}, 
        "Hello, world! I am a square numbre ", this.props.number, "."
      )
    );
  }
});


var Grid = React.createClass({displayName: "Grid",
  render: function() {
    return (
      React.createElement("div", {className: "grid"}, 
        "Hello, world! I am a grid.", 
        React.createElement(Square, null), 
        React.createElement(Square, null), 
        React.createElement(Square, null), 
        React.createElement(Square, null)
      )
    );
  }
});

React.render(
  React.createElement(Grid, null),
  document.getElementById('app')
);