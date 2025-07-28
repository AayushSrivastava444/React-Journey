import React, {useContext} from 'react';
import {UserContext} from  './ComponentA.jsx'

function ComponentD(){

  const user = useContext(UserContext);
   return(
    <div className="Box">
      
      <h2>ComponentD</h2>
      <h2>{`Bye ${user}`}</h2>

    </div>
   );
}

export default ComponentD