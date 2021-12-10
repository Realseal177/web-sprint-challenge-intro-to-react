import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';


export default function Details(props) {
    const [planets, setPlanets] = useState([]);

    useEffect(() => {
      const fetchPlanets = () => {
        axios
          .get(`http://swapi.dev/api/planets/`)
          .then((resp) => {
            console.log(resp.data);
            setPlanets(resp.data);
          })
          .catch((error) => {
            console.error(error);
          })
          .finally(console.log("Planets working!!"));
      }
      fetchPlanets()
    }, []);

    return (
        <div className='planets'>
            <h2>Planets:</h2>
        </div>
    )
}