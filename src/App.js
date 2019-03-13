import React from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import characters from "./characters.json";
import "./App.css";

class App extends React.Component {

  state = {
    characters
  };

  clicked = {};
  score = 0;
  highScore = 0;
  
  handleClick = id => {
    
    const char = this.state.characters.find( c => c.id === id);

    if (!this.clicked[id]) {
      console.log("not already clicked " + char.name + this.clicked.id);
      this.clicked[id]= true;
      this.score ++;
      if (this.score > this.highScore) {
        this.highScore = this.score;
      }
      console.log("Score: " + this.score + " High Score: " + this.highScore + " " + this.clicked);
    } else if(this.clicked[id] === true) {
      console.log("Already clicked " + char.name + this.clicked[id]);
      this.clicked = {};
      this.score = 0;
      console.log("Score: " + this.score + " High Score: " + this.highScore + " " + this.clicked);
    }

    this.shuffleCards();
  };


  shuffleCards = () => {
      const shufChar = this.state.characters;
      for (let i = shufChar.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shufChar[i], shufChar[j]] = [shufChar[j], shufChar[i]];
      }
      this.setState({ shufChar });
  };





  render() {
    return (
      <Wrapper>
        <h1 className="title">The Simpsons!</h1>
        {
          this.state.characters.map(character => (
            <CharacterCard 
              key={character.id}
              id={character.id}
              name={character.name}
              image={character.image}
              handleClick={this.handleClick}
            />
          ))
        }
      </Wrapper>
    )
  };
}

export default App;
