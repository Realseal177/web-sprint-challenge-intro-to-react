// Write your Character component here
import React from "react";
import App from '../App';


export default function StarWars({info}) {
  //const { info } = props;
  //console.log(props);

  return (
    <div className="charList">
      <h2 className="name">
        {info.name}
      </h2>
    </div>
  );
}
