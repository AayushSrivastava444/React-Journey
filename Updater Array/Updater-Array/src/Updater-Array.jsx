import React, { useState } from 'react';

function UpdaterArray(){
     
    const[food, setFood] = useState(["Apple", "Orange", "Banana"]);

    function handleAddFood(){
      const newFood=document.getElementById("foodInput").value;
      document.getElementById("foodInput").value="";
      setFood(f=> [...f, newFood]);
    }

    function handleRemoveFood(index){
       setFood(food.filter((_, i)=> i!==index));
    }

    return(
      <div>
        <h2>List of Food</h2>
        <ul>
          {food.map((food, index)=> <li key={index} onClick={()=>handleRemoveFood(index)}>{food}</li> )}
        <input type="text" id="foodInput" placeholder="Enter food name"></input>
        <button onClick={handleAddFood}>Add Food</button>
        </ul>
      </div>
     );
}

export default UpdaterArray

