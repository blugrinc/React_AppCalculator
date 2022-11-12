import Keyboard from "./components/keyboard/Keyboard";
import { Display } from "./components/display/Display";
import Structure from "./components/structure/Structure";
import Button from "./components/keyboard/Button";
import CalculatorProvider from "./context/CalculatorContext"

//Instanzio un array con tutti i bottoni che voglo nella mia calcolatrice. 
//Poi facciop il rendering multiplo con map dopo aver concatenato con flat gli elemtneti degli array

const btnValues = [  
  [ "7", "8", "9", "/" ],
  [ "4", "5", "6", "x" ],
  [ "1", "2", "3", "+" ],
  [ ".", "0", "C", "-" ],
  ["DEL", "="]
]

/*const testA = {
  a: 1,
  b: 2
} */

// test?.a - dot notation
// const {a} = testA - destrutturazione
// const { a: nuovoNomeVariabile } = testA; - cambiare nome all'oggetto

/* const testB = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5
}*/

//test["a"] - object mapping
/* const lengthObjectPropertiesToArray = Object.keys(testB).length;
let i = 0;
while (i < lengthObjectPropertiesToArray) {  
  console.log(testB[ i ]);
  i++
} 
*/


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
