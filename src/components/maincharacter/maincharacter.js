import "./maincharacter.scss";

import axios from "axios";
import React from "react";

class MainCharacter extends React.Component {
  state = {
    characters: null,
    description: null,
  };

  foundId = this.props.match.params.id;

  fetchCharacter = (foundId) =>
    axios
      .get("https://characters-hackathon-server.herokuapp.com/series")
      .then((response) => {
        const allCharacters = response.data[foundId];
        this.setState({ characters: allCharacters });
      });

  componentDidMount() {
    this.fetchCharacter(this.foundId);
  }

  render() {
    return (
      <>
        {this.state.characters && (
          <div>
            <h1 className="character-heading">Main Characters</h1>
            <p>Meet the main characters of {this.state.characters.title}</p>
            <p className="character__serie-description">
              {this.state.characters.description}
            </p>
            {this.state.characters.characters.map((character, index) => {
              return (
                <div key={index} className="container-character">
                  <div className="container-left-character">
                    <div className="character">
                      <h2 className="character-name">{character.name}</h2>
                      <h3 className="character-actor">{character.actor}</h3>
                      <p className="character-description">
                        {character.description}
                      </p>
                    </div>
                  </div>
                  <div className="container-right-character">
                    <img
                      className="character-image"
                      src={`https://characters-hackathon-server.herokuapp.com/images/${character.img} `}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </>
    );
  }
}
export default MainCharacter;
