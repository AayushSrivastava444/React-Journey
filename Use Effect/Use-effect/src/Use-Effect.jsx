import React, {useState, useEffect} from "react";

function UseEffect(){
     
    const[count, setCount]=useState(0);
    const[color, setColor]=useState("Green");
    
    useEffect(()=>{
         document.title= `Count: ${count} ${color}`;
    }, [count, color]);
    
    function addCount(){
       setCount(c=> c+1);
    }

    function subtractCount(){
        setCount(c=> c-1);
        }

        function changeColor(){
            setColor(c=> c==="Green" ? "Red" : "Green");
        }
    
    return(
        <>
        <p style={{color: color}}>Count: {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={subtractCount}>Subtract</button><br/>
        <button onClick={changeColor}>Change Color</button>
        </>
     );
}

export default UseEffect