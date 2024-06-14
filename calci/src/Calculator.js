import React, { useState } from 'react';
import './calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const handle=(e)=>{
    if(e==="AC"){
      clear();
    }
    else if(e==="="){
      calculate();
    }
    else if(e==="DE"){
      setInput(input.slice(0,-1))
    }
    else{
      setInput(input+e);
    }
  };
  const calculate=()=>{
    try{
      setInput(eval(input).toString());
    }
    catch(error){
      setInput("Error");
    }
  };
  const clear=()=>{
    setInput("");
  };
  return(
    <div className='button'>
      <div className='display'>
        <input type="text" value={input} readOnly/>
      </div>
    <div>
      <button onClick={()=>handle("AC")}>AC</button>
      <button onClick={()=>handle("DE")}>DE</button>
      <button onClick={()=>handle(".")}>.</button>
      <button onClick={()=>handle("/")}>/</button>
    </div>
    <div>
      <button onClick={()=>handle("7")}>7</button>
      <button onClick={()=>handle("8")}>8</button>
      <button onClick={()=>handle("9")}>9</button>
      <button onClick={()=>handle("*")}>*</button>
    </div>
    <div>
      <button onClick={()=>handle("4")}>4</button>
      <button onClick={()=>handle("5")}>5</button>
      <button onClick={()=>handle("6")}>6</button>
      <button onClick={()=>handle("+")}>+</button>
    </div>
    <div>
      <button onClick={()=>handle("1")}>1</button>
      <button onClick={()=>handle("2")}>2</button>
      <button onClick={()=>handle("3")}>3</button>
      <button onClick={()=>handle("-")}>-</button>
    </div>
    <div>
      <button onClick={()=>handle("00")}>00</button>
      <button onClick={()=>handle("0")}>0</button>
      <button className='equal' onClick={()=>handle("=")}>=</button>
    </div>
  </div>
  );
  
};

export default Calculator;
