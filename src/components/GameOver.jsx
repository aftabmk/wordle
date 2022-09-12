import { useContext } from "react";
import { AppContext } from "../App";

const GameOver = () => {

    const {gameOver, currAttempt ,correctWord } = useContext(AppContext)

    return ( 
    <div className="gameOver">
        <h3>{gameOver.guessedWord ? <span>You Guess is Correct</span>:<span className="incorrect">Sorry your guess is incorrect</span>}</h3>
        <h1>WORD:<span>{correctWord.toUpperCase()}</span></h1>
        { gameOver.guessedWord && (<h3>You guessed in <span>{currAttempt.attempt}</span> attempts</h3>)} 
    </div>
    );
}
 
export default GameOver;