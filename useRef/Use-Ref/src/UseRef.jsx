import React, {useState, useEffect, useRef} from 'react';

function UseRef(){

    const ref1=useRef(null);
    const ref2=useRef(null);
    const ref3=useRef(null);
    
    useEffect(()=>{
        console.log("Component Re-Rendered");
    });

    function handleInputChange1(){
        ref1.current.focus();
        ref1.current.style.backgroundColor="yellow"
        ref2.current.style.backgroundColor=""
        ref3.current.style.backgroundColor=""
    }

    function handleInputChange2(){
        ref2.current.focus();
        ref2.current.style.backgroundColor="yellow"
        ref1.current.style.backgroundColor=""
        ref3.current.style.backgroundColor=""
    }

    function handleInputChange3(){
        ref3.current.focus();
        ref3.current.style.backgroundColor="yellow"
        ref2.current.style.backgroundColor=""
        ref1.current.style.backgroundColor=""
    }

    return(<div>
     <button onClick={handleInputChange1}> Click Me!</button>

     <input ref={ref1}></input>

     <button onClick={handleInputChange2}> Click Me!</button>

     <input ref={ref2}></input>

     <button onClick={handleInputChange3}> Click Me!</button>

     <input ref={ref3}></input>
     </div>
    );
}

export default UseRef