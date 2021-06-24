import React from 'react';
import './index.css';

const App = () => {
    console.log('999');
    const demo = () => {
        return 1;
    };
    const a = [1, 2, 3];
    const b = [...a, 4];

    return <div className='app'>App</div>;
};

export default App;
