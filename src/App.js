import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import imgsrc from './AryaStark.jpg'

class App extends React.Component {
  state={
    fullName:"Arya Stark",
    bio:"Princess Arya Stark is the third child and second daughter of Lord Eddard Stark and his wife, Lady Catelyn Stark. She is the sister of the incumbent Westerosi monarchs, Sansa, Queen in the North, and Brandon, King of the Andals and the First Men.",
    profession:"Pricess of north and knight of the year ",
    imgSrc:"./AryaStark.jpg" ,
    show:false,
  }
  render()
  {
    return (
      <div></div>
    )
  }
  
}

export default App;
