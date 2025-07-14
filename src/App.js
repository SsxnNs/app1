import React from 'react';

function App() {
  const divstyle = {
    color: 'red',
    backgroundColor: 'powderblue',  // Fixed the typo here
    fontSize: 'larger',
    padding: '3px'
  };

  return (
    <div style={divstyle}>
      <h1>Hello world</h1>
      <h1>ดีชาวโลก</h1>
    </div>
  );
}

export default App;
