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