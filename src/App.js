import React from 'react';
import { DatePicker, Button } from 'antd';
import './index.less';

const App = () => {
    const demo = () => {
        return 1;
    };
    const a = [1, 2, 3];
    const b = [...a, 4];

    return (
        <div className='app'>
            <DatePicker />
            <Button>11</Button>
            App
        </div>
    );
};

export default App;
