import React from 'react';
import Grid from './grid.jsx';

React.render(
    <div>
        <h1>SquarO propulsé en React</h1>
        <Grid 
            data={[0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0]} 
            width="400" 
            />
    </div>,
    document.getElementById('app')
);