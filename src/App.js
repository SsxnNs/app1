import React from 'react';
import './style.css';
import { Header, Content, Footer } from './func-components';
import Calendar from './class-components'


function App() {
  const divstyle = {
    color: 'red',
    backgroundColor: 'blue',
    fontSize: 'larger',
    padding: '3px'
  };

  return (
    <>
      <Header />
      <p><center><Calendar/></center></p>
      <Content />
      <Footer />
    </>
  );
}

export default App;
