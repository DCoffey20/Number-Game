import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Buttons from "./components/Buttons";

function randTarget() {
  return Math.round(Math.random()*101)+19;
};

function randValue () {
  return Math.ceil(Math.random()*12);
};

class App extends Component {

  state = {
    wins: 0,
    losses: 0,
    buttons: [
      { btnId: 1, value: randValue() },
      { btnId: 2, value: randValue() },
      { btnId: 3, value: randValue() },
      { btnId: 4, value: randValue() }
    ],
    currentScore: 0,
    targetNumber: randTarget()
  }

onButtonClick = (event) => {
  // console.log(this.state.buttons[parseInt(event.target.id)-1].value);
  const btnVal= this.state.buttons[parseInt(event.target.id)-1].value;
  // const score=this.state.currentScore;
  this.setState({currentScore:this.state.currentScore + btnVal});

  this.scoreCheck (this.state.currentScore);
}

scoreCheck = (score) => {
  if (this.state.targetNumber===score) {
    this.setState({wins:this.state.wins+1});
    this.resetGame();
  } else if (this.state.targetNumber<score) {
    this.setState({losses:this.state.losses+1})
    this.resetGame();
  }
} 

resetGame = () => {
  this.setState({
    buttons: [
      { btnId: 1, value: randValue() },
      { btnId: 2, value: randValue() },
      { btnId: 3, value: randValue() },
      { btnId: 4, value: randValue() }
    ],
    currentScore: 0,
    targetNumber: randTarget()
  })
} 
  render() {
    return (
      <div className="App" >
        <Header
          wins={this.state.wins}
          losses={this.state.losses}
        />
        <div className="d-flex justify-content-around container">
          {this.state.buttons.map((b) => (
            <Buttons
              btnId={b.btnId}
              click= {this.onButtonClick}
              key={b.btnId}
            />

          ))}

        </div>
            <hr/>
        <div>
            <h2>Current Score: {this.state.currentScore} | Target Number: {this.state.targetNumber}</h2>
        </div>
      </div>
    );
  }
}

export default App;
