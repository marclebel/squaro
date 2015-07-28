import React from 'react';
import Grid from './components/grid';


React.render(
    <div>
        <h1>SquarO</h1>
        <Grid 
            data={[0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0]} 
            width="300" 
            />
    </div>,
    document.getElementById('app')
);