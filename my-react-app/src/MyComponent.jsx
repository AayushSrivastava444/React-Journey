import React, {useState} from 'react';

function MyComponent(){
   
    const [name, setName]= useState("Virat Kohli");
    const [age, setAge]= useState(17);
    const [isEmployed, setIsEmployed]= useState(false);

    const updateAge=()=>
        setAge(18);

    const updateName= () => {
        setName("Rohit Sharma ");

    }

    const updateIsEmployed=()=>{
        setIsEmployed(!isEmployed);
    }

    return(
        <>
     <div>
        <p>Name: {name}
        </p>
        <button onClick={updateName}>Set Name</button>
     </div>
     <div> 
         <p>Age: {age}

         </p>
         <button onClick={updateAge}>Set Age</button>
     

     </div>

     <div>
        <p>Is Employed?: {isEmployed ? "Yes" : "No"}</p>
        <button onClick={updateIsEmployed}>Set Status</button>
     </div>
     </>

    );

}
export default MyComponent