// Write your Character component here
import React from "react";
import styled from "styled-components";

const StyledWars = styled.div`
  h2 {
    /* text-align: left; */
    padding: 1%;
    font-family: 'Audiowide', cursive;
    text-shadow: 1px 1px 5px #fff;
    border: 3px solid white;
    border-radius: 5px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  }
`

export default function StarWars({ info }) {
  //const { info } = props;
  //console.log(props);

  return (
    <StyledWars className="charList">
      <h2 className="name">{info.name}</h2>
    </StyledWars>
  );
}
