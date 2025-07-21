import React from 'react';
import './style.css';
import { Header, Content, Footer } from './func-components';


function App() {
  const divstyle = {
    color: 'red',
    backgroundColor: 'powderblue',
    fontSize: 'larger',
    padding: '3px'
  };

  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
}

export default App;
