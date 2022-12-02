import React, { useState } from 'react';
import Tooltip from './Tooltip';

function App() {
  const [ position, setPosition ] = useState('');

  const handleChange = (e) => {
    setPosition(e.target.value);
  }

  return (
    <div className="App">
      <div className='lable'>
        Write a position (top, bottom, left, right)
        <br/>
        <input id='position-inp' onChange={handleChange} />
      </div>
      <Tooltip
        position = {position}
      />
    </div>
  );
}

export default App;
