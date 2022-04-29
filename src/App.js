import './App.css';
import { useState, useEffect } from 'react';
import Footer from './Footer';
import Header from './Header';
import Selection from './Selection';
import Game from './Game';


function App() {

  const selectionArray = [
    {
      name:'rock',
      icon:'fa-solid:hand-rock'
    },
    {
      name:'paper',
      icon:"fa-solid:hand-paper"
    },
    {
      name:'scissors',
      icon:"fa-solid:hand-scissors"
    }
  ];

  const [toggleGameView, setToggleGameView] = useState(false);
  const [userSelection, setUserSelection] = useState({});
  const [score, setScore] = useState(0);
  const [homeSelection, setHomeSelection] = useState({});

  useEffect(() => {
    setHomeSelection(selectionArray[Math.floor(Math.random()*selectionArray.length)]);
  }, [homeSelection.name]);
  
  console.log('selected:',userSelection.name);
  console.log('Home selected:',homeSelection.name);
  console.log('score: ', score);
  
  return (
    <div className="App">
      <Header score={score}/>
      <div style =  {{ display: toggleGameView ? "none": "block" }} >
        <Selection 
          setToggleGameView={setToggleGameView} 
          selectionArray={selectionArray}
          setUserSelection={setUserSelection}
          />
      </div>
      <div style =  {{ display: toggleGameView ? "block" : "none" }} >
        <Game 
          toggleGameView={toggleGameView} 
          setToggleGameView={setToggleGameView}
          userSelection={userSelection}
          homeSelection={homeSelection}
          score={score}
          setScore={setScore}
          setHomeSelection={setHomeSelection}
          />
      </div> 
      <Footer />
    </div>
  );
}

export default App;


