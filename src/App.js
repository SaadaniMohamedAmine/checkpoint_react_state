import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import imgSrc from './AryaStark.jpg'

class App extends React.Component {
  state={
    Person:{
      fullName:"Arya Stark",
      bio:"Princess Arya Stark is the third child and second daughter of Lord Eddard Stark and his wife, Lady Catelyn Stark. She is the sister of the incumbent Westerosi monarchs, Sansa, Queen in the North, and Brandon, King of the Andals and the First Men.",
      profession:"Pricess of north and knight of the year ",
      imgSrc:imgSrc ,
    },
    show:false,
  };
   toggleShow=()=>{
    this.setState({show:!(this.state.show)}) ;
   } 
   
  
  render()
  {
    return (
      <div>
        <button onClick={this.toggleShow} className="btn">{this.state.show? "Hide":"Show"}</button>
        {this.state.show &&   
        <div id="component">
          <div className="item"><span className="key">Full name: </span>{this.state.Person.fullName}</div>
          <div className="item"><span className="key">Profession : </span>{this.state.Person.profession}</div>
          <div className="item"><span className="key">Biographie: </span><span id="bio">{this.state.Person.bio}</span></div>
          <div className="item"><img src={this.state.Person.imgSrc } id="img" /></div>
        </div>
        }
      </div>
      
    )
  }
}
  


export default App;
