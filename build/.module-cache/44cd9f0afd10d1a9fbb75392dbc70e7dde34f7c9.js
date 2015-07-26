var Square = React.createClass({displayName: "Square",
  render: function() {
    return (
      React.createElement("div", {className: "square"}, 
        "Hello, world! I am a square."
      )
    );
  }
});


var Grid = React.createClass({displayName: "Grid",
  render: function() {
    return (
      React.createElement("div", {className: "grid"}, 
        "Hello, world! I am a grid."
      )
    );
  }
});

React.render(
  React.createElement(Grid, null),
  document.getElementById('app')
);