import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import characters from "./characters.json";
import array from "./array.json";
import "./App.css";
import Nav from "./components/navbar/nav.js";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    characters,
    array,
    score: 0,
    message: "Start game by clicking on a card!"
  };

  shuffle = id => {
    const characters = this.state.characters
    // characters.map(character => character.id)
    let array = this.state.array

    //if the guess is not in the array of guesses 
    if (!this.state.array.includes(id)) {
      array.push(id);
      let newScore = this.state.score;
      newScore += 1;
      let newMessage = this.state.message;
      newMessage = "Correct!"
      this.setState({message: newMessage})
      this.setState({ score: newScore })
      console.log(newScore)
    }
    else {
      let score = 0;
      let newMessage = this.state.message;
      newMessage = "Wrong guess!"
      this.setState({message: newMessage})
      this.setState({ score })
      this.setState({
        array: []
      });
      console.log(array)
    }

     // for (let i = 0; i < array.length-1; i++) {
    //    this.renderElement(i) 
    // }

    console.log(id)
    console.log(array)

    for (let i = characters.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [characters[i], characters[j]] = [characters[j], characters[i]]; // eslint-disable-line 
      this.setState({ characters });
    }
  }

  // renderElement(p){
    //     var temp = array.length
    //     //var p
    //    //console.log(array);
    //    //for (let p = 0; p < temp-1; p++) {
    //       console.log(p);
    //       //console.log(temp-1);
  
    //       if(this.state.array[p] === this.state.array[temp-1])
    //         return console.log("hello");
    //       return null;
          
    //  }

  render() {
    return (

      <Wrapper>

      <Nav/>

        <div className="break">
        <ul>
          <li className="score-text">Score: {this.state.score}</li>
          <li>{this.state.message}</li>
          </ul>
        </div>

          {this.state.characters.map(character => (
            <CharacterCard
              shuffle={this.shuffle}
              id={character.id}
              key={character.id}
              name={character.name}
              image={character.image}
            />
          ))}

      </Wrapper>
    );
  }

}


export default App;