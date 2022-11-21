# React_App
#### Installation 
```
npm install
npm i react-textfit
```

## Calculator
This is a basic project to go deep into the study of certain technologies such as React. Application is structured is organised in such a way that it is easy to understand and use. 

![alt text](https://github.com/blugrinc/React_AppCalculator/blob/master/public/calculator.png?raw=true)

## Main Features

- [App](#App)
- [CreateContext](#CreateContext)
- [Button function](#Button-Function)

## App
The layout of the general structure was first defined. Then the 'Display' and 'Keyboard' were defined. 
```
function App() {
  return (
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
```
Keyboard creates as many buttons as there are elements inside btnValues. 
```
const btnValues = [  
  [ "7", "8", "9", "/" ],
  [ "4", "5", "6", "x" ],
  [ "1", "2", "3", "+" ],
  [ ".", "0", "C", "-" ],
  ["DEL", "="]
]
```

## CreateContext
I use the CreateContext to define the calculator's default settings and share them with all components. 
```
 const [ calculator, setCalc ] = useState({
        sign: "",
        num: 0,
        res: 0
    });
```

## Button function
The handleClick function calls the individual functions if 'value' is defined within 'results'. In case the value is "undefined" I will return the numberValue. 
```
const handleClick = () => { 
    const results = {
      '.': commaClick,
      'DEL': resetClick,
      'C': deleteClick,
      '/': signClick,
      'x': signClick,
      '-': signClick,
      '+': signClick,
      '=': equalsClick
    }
    if (results[value]) {
      return results[value]()
    } else {
      return handleClickNumber()
    }
  }
  ```
  To modify the CSS of individual buttons, I used a function getClassName, which reads the value of the button and returns customised markup for that button. 
  ```
  return (
    <button onClick={handleClick} className={`${getClassName(value)} button`}> {value} </button>
    )
}

const getClassName = function (btn) {
    const className = {
        '=': 'equals',
        'DEL': 'delete',
        'x': 'opt',
        '/': 'opt',
        '+': 'opt',
        '-': 'opt',
    }
    return className[btn]
}
```
