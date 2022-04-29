import React,{useEffect,useState} from 'react'
import { Icon } from '@iconify/react';

function Game( {setHomeSelection,toggleGameView, setToggleGameView, userSelection, homeSelection,setScore,score}) {

    const [playerWin, setPlayerWin] = useState(" ");

    const handleClick= (e) => {
        e.preventDefault();
        setHomeSelection({})
        setToggleGameView(false)
    }

    console.log(userSelection.name)
    console.log(homeSelection.name)


    const result =() => {
        if (userSelection.name === homeSelection.name ) {
            setPlayerWin("DRAW!");
           
        }  else if (userSelection.name === 'rock' && homeSelection.name === 'scissors' ) {
            setPlayerWin("YOU WIN!");
            setScore(score + 1);
          
        } else if (userSelection.name === 'scissors'  && homeSelection.name === 'paper' ) {
            setPlayerWin("YOU WIN!");
            setScore(score + 1);
          
        } else if (userSelection.name === 'paper'  && homeSelection.name === 'rock' ) {
            setPlayerWin("YOU WIN!");
            setScore(score + 1);
           
        } else {
            setPlayerWin("YOU LOSE!");
            
        }
    }
 console.log (playerWin);
    useEffect(() => {
        result();
       },[userSelection.name]);

  return (
    <div className='game'>
        <div className='userCon'>
            <span> YOU PICKED </span>
            <div className={userSelection.name}>
                <div className='userSelection'>
                    <Icon icon={userSelection.icon} color="#1f3756"  width="70"/>
                </div>
                
            </div>
        </div>
        <div className='resultCon'>
            <div>{playerWin}</div>
            <button onClick={handleClick}>PLAY AGAIN</button>
        </div>
        <div className='houseCon'>
            <span> THE HOUSE PICKED</span>
            <div className={homeSelection.name}>
                <div className='homeSelection'>
                    <Icon icon={homeSelection.icon} color="#1f3756"  width="70"/>
                </div>
            </div>
        </div>    
            
    </div>
  )
}

export default Game