import React, {useState, useEffect} from 'react';
import './App.css';
import Characters from "./components/Character"
import { Container, Row } from "reactstrap";
import axios from "axios";

const App = () => {
  const [character, setCharacter] = useState([]);
  useEffect (() => {
    axios.get("https://rickandmortyapi.com/api/character")
    .then(response => {
     console.log('response', response)
     setCharacter(response.data.results)
    })
    .catch(err => console.log("err", err));
  }, []);
  console.log(character);

  return (
      <Container className="App">
        <h1 className="Header">Rick & Morty</h1>        
        <Row> 
        {character.map(element => {
          // ..... spread /rest operator  to pass entire elements
        return <Characters {...element}/>
        })}
        </Row>
     </Container>
  );
}

export default App;

