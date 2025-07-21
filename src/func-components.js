import React from 'react';

export function Header() {
  const aStyle = {
    display: 'inline-block',
    margin: '7px',
    color: 'blue',
    textDecoration: 'none',
  };

  return (
    <div style={{ backgroundColor: '#ccc', padding: '10px' }}>
      <a href="#" style={aStyle}>Home</a> |&nbsp;
      <a href="#" style={aStyle}>React</a> |&nbsp;
      <a href="#" style={aStyle}>React Native</a>
    </div>
  );
}

export function Content() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Hello <br /> React & React Native</h2>
      <br /><br /><br />
    </div>
  );
}

export const Footer = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      &copy; {new Date().getFullYear()} All rights reserved
    </div>
  );
};
