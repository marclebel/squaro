'use strict';

var Square = React.createClass({
    displayName: 'Square',

    render: function render() {

        var borderSize = '2px';
        var borderStyle = borderSize + ' solid #333';

        var divStyle = {
            position: 'absolute',
            left: this.props.pxOffset + this.props.row * this.props.pxSize + 'px',
            top: this.props.pxOffset + this.props.col * this.props.pxSize + 'px',
            width: this.props.pxSize + 'px',
            height: this.props.pxSize + 'px',
            lineHeight: this.props.pxSize + 'px',
            borderRight: borderStyle,
            borderTop: borderStyle,
            color: this.props.isValid ? 'black' : 'red',
            borderLeft: this.props.showLeftBorder ? borderStyle : 'none',
            borderBottom: this.props.showBottomBorder ? borderStyle : 'none',
            textAlign: 'center'
        };

        var numberStyle = {
            paddingLeft: borderSize,
            verticalAlign: 'middle',
            fontSize: this.props.fontSize + 'px'
        };

        return React.createElement(
            'div',
            { className: "square", style: divStyle },
            React.createElement(
                'span',
                { style: numberStyle },
                this.props.number
            )
        );
    }

});

var Circle = React.createClass({
    displayName: 'Circle',

    handleClick: function handleClick() {
        this.props.handler(this);
    },

    render: function render() {
        var divStyle = {
            position: 'absolute',
            backgroundColor: this.props.value == 0 ? 'white' : 'blue',
            left: this.props.row * this.props.pxOffset + 'px',
            top: this.props.col * this.props.pxOffset + 'px',
            width: 2 * this.props.radius + 'px',
            height: 2 * this.props.radius + 'px',
            display: 'inline',
            border: this.props.borderSize + 'px solid #333',
            MozBorderRadius: 2 * this.props.radius + 'px',
            WebkitBorderRadius: 2 * this.props.radius + 'px',
            zIndex: '2'
        };

        return React.createElement('div', { className: "circle",
            onClick: this.handleClick,
            style: divStyle
        });
    }

});

var Grid = React.createClass({
    displayName: 'Grid',

    getInitialState: function getInitialState() {
        return {
            userClicks: Array.apply(null, Array(this.props.data.length)).map(Number.prototype.valueOf, 0)
        };
    },

    handleClick: function handleClick(childComponent) {

        var pUserClicks = this.state.userClicks;
        pUserClicks[childComponent.props.index] = 1 - childComponent.props.value;

        var gagne = true;
        for (var i = this.props.data.length - 1; i >= 0; i--) {
            if (this.props.data[i] != pUserClicks[i]) {
                gagne = false;
                break;
            }
        };

        console.log(pUserClicks);
        console.log(this.props.data);

        if (gagne) {
            console.log("gagné !!!");
        }

        this.setState({ userClicks: pUserClicks });
    },

    getNumber: function getNumber(arr, i, j) {

        var size = Math.sqrt(arr.length);
        var i1 = i + j * size;
        var i2 = i + 1 + j * size;
        var i3 = i + (j + 1) * size;
        var i4 = i + 1 + (j + 1) * size;

        return arr[i1] + arr[i2] + arr[i3] + arr[i4];
    },

    render: function render() {

        var size = Math.sqrt(this.props.data.length);
        console.log("size : " + size);
        var figures = new Array((size - 1) * (size - 1));
        for (var i = 0; i < size - 1; i++) {
            for (var j = 0; j < size - 1; j++) {
                figures[i + j * (size - 1)] = this.getNumber(this.props.data, i, j);
            }
        };

        var circleRadius = this.props.width / 20;
        var circleBorder = 2;
        var fontSize = this.props.width / 10;

        var gridH = parseInt(this.props.width) + 2 * (circleRadius + circleBorder);

        var divStyle = {
            position: 'relative',
            width: this.props.width + 'px',
            height: gridH + 'px'
        };

        return React.createElement(
            'div',
            { className: "grid", style: divStyle },
            this.state.userClicks.map(function (value, i) {

                var row = i % size;
                var col = Math.floor(i / size);

                return React.createElement(Circle, { handler: this.handleClick,
                    key: i,
                    index: i,
                    value: value,
                    row: row,
                    col: col,
                    radius: circleRadius,
                    borderSize: circleBorder,
                    pxOffset: this.props.width / (size - 1)
                });
            }, this),
            figures.map(function (value, i) {

                var row = i % (size - 1);
                var col = Math.floor(i / (size - 1));

                var showLeftBorder = row == 0;
                var showBottomBorder = col == size - 2;

                var isValid = this.getNumber(this.props.data, row, col) == this.getNumber(this.state.userClicks, row, col);

                return React.createElement(Square, {
                    key: i,
                    row: row,
                    col: col,
                    number: value,
                    isValid: isValid,
                    showLeftBorder: showLeftBorder,
                    showBottomBorder: showBottomBorder,
                    pxOffset: circleRadius,
                    pxSize: this.props.width / (size - 1),
                    fontSize: fontSize
                });
            }, this)
        );
    }
});

React.render(React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'SquarO propulsé en React'
    ),
    React.createElement(Grid, {
        data: [0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0],
        width: "400"
    })
), document.getElementById('app'));