
import Icon from "./Components/Icon";
import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import "./style.css";

const tictactoeArray = new Array(9).fill("")


const App = () => {

const [isCross, setIsCross]= useState(true)
const [winMessage, setWinMessage]= useState("")



function resetGame(){
    tictactoeArray.fill("")
    setIsCross(true)
    setWinMessage("")
}

function checkIsWinner(){
    // row
    if(tictactoeArray[0]==tictactoeArray[1] && tictactoeArray[0]==tictactoeArray[2] && tictactoeArray[0] !==""){
        setWinMessage( tictactoeArray[0] + " has won match")
    }
    else if(tictactoeArray[3]==tictactoeArray[4] && tictactoeArray[3]==tictactoeArray[5] && tictactoeArray[3] !==""){
        setWinMessage( tictactoeArray[3] + " has won match")
    }
else if(tictactoeArray[6]==tictactoeArray[7] && tictactoeArray[6]==tictactoeArray[8] && tictactoeArray[6] !==""){
    setWinMessage( tictactoeArray[6] + " has won match")
}
// column
else if(tictactoeArray[0]==tictactoeArray[3] && tictactoeArray[0]==tictactoeArray[6] && tictactoeArray[0] !==""){
    setWinMessage( tictactoeArray[0] + " has won match")
}
else if(tictactoeArray[1]==tictactoeArray[4] && tictactoeArray[1]==tictactoeArray[7] && tictactoeArray[1] !==""){
    setWinMessage( tictactoeArray[1] + " has won match")
}
else if(tictactoeArray[2]==tictactoeArray[5] && tictactoeArray[2]==tictactoeArray[8] && tictactoeArray[2] !==""){
    setWinMessage( tictactoeArray[2] + " has won match")
}

// diagonal
else if(tictactoeArray[0]==tictactoeArray[4] && tictactoeArray[0]===tictactoeArray[8] && tictactoeArray[0] !==""){
    setWinMessage( tictactoeArray[0] + " has won match")
}

else if(tictactoeArray[2]==tictactoeArray[4] && tictactoeArray[2]==tictactoeArray[6] && tictactoeArray[2] !==""){
    setWinMessage( tictactoeArray[2] + " has won match")
}    
}

// playGame

function playGame(index){
    console.log("clicked on index", index)
    if(winMessage){

        return toast("Game is over!")
    }
    else if(tictactoeArray[index] !==""){
        return toast ("already filled")
    }
    else{
        tictactoeArray[index] = isCross == true? "cross": "circle"
        setIsCross(!isCross)
        console.log(tictactoeArray[index])
    }
   checkIsWinner()
}



return (
    <div class="app-body">
        <ToastContainer position="bottom-center"/>
     <h1> lets play Tic Tac Toe game </h1>
     {winMessage?(
        <div>
            <h2>{winMessage} </h2>
            <button onClick={resetGame} className="space">Play Again</button>
            </div>
     ):(
        <h1 className="turn">{isCross===true?"Cross":"Circle"}'s turn</h1>
     )}

     <div className="container">
        {
            tictactoeArray.map((value, index)=>(
                <div className="item1" onClick={()=>playGame(index )}>
                    <Icon  icon={value} />
                </div>
            ) )
} </div>
        
     </div>
);
}
         


export default App
     