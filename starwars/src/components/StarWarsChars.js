import React from "react";
import Char from "./Char";

const StarWarsChars = props => {
    console.log(props.characters.name);
  return (
      <div className="chars">
      {props.characters.map(char => {
          return (
              <div>
                  <Char charName={char} />
              </div>
          );
      })}
    </div>
  );
};

export default StarWarsChars;
