import './App.css';

function Header({score}) {
    return (
        <div className='headingCon'>
            <div className='heading'>
                <span>ROCK</span>
                <span>PAPER</span>
                <span>SCISSORS</span>
            </div>
            <div className='score'>
                <span>SCORE</span>
                <span style={{fontSize:'55px', color:'hsl(229, 25%, 31%)'}}>{score}</span>
            </div>
        </div>
    )
}

export default Header