import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let temp : string = '리액트'
  const style = {
    backgroundColor :'black',
    color : 'white',
    fontSize : '40px',
    fontWeight : 'bold',
    padding : '20px'
  }
  return (
    <div className="container">
      <h1 className='test'> hello, {
      temp === '리액트' ? <h1>리액트!</h1> : null
      }</h1>
      <br/>
      <p>반갑습니다</p>
      <input/>
    </div>
  );
}

export default App;
