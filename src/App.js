import Keyboard from "./components/keyboard/Keyboard";
import { Display } from "./components/display/Display";
import Structure from "./components/structure/Structure";
import Button from "./components/keyboard/Button";
import CalculatorProvider from "./context/CalculatorContext"

//Instanzio un array con tutti i bottoni che voglo nella mia calcolatrice. 
//Poi faccio il rendering multiplo con map dopo aver concatenato con flat gli elemtneti degli array

const btnValues = [  
  [ "7", "8", "9", "/" ],
  [ "4", "5", "6", "x" ],
  [ "1", "2", "3", "+" ],
  [ ".", "0", "C", "-" ],
  ["DEL", "="]
]


function App() {
 
  return (
   //i componenti dentro CalcProvider potranno accedervi ai contatti 
    //calc e alla funzione setCalc
    <CalculatorProvider> 
      <Structure>        
        <Display />
        <Keyboard>       
          {btnValues.flat().map((btn, i) => (            
            <Button
              value={btn}
              key={i}
            />
          ))}  
        </Keyboard>
      </Structure>
    </CalculatorProvider>
  );
}

export default App;
