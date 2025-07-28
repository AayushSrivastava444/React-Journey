import ComponentB from './ComponentB.jsx'
import React, {useState, createContext} from 'react';

export const UserContext=createContext();

function ComponentA(){
   const [user, setUser]=useState("Hello");
   return(
    <div className="Box">
      
      <h2>ComponentA</h2>
      <h2>{`${user} Aayush`}</h2>
      <UserContext.Provider value={user}><ComponentB/></UserContext.Provider>

    </div>
   );
}

export default ComponentA