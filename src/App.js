import React from 'react';
import './style.css';

function App() {
  const divstyle = {
    color: 'red',
    backgroundColor: 'powderblue',  // Fixed the typo here
    fontSize: 'larger',
    padding: '3px'
  };

  return (
    <>
      <div style={divstyle}>
        <h1>Hello world</h1>
        <h1>ดีชาวโลก</h1>
      </div>
      <h2>DeveloperThai.com</h2>
      <div className="title">React & React Native</div>
    </>
  );
}

export default App;
