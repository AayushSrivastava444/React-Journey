import React, {useState} from 'react';

function UpdaterArr(){
    
    const[cars, setCars]= useState([]);
    const[carYear, setCarYear]=useState(new Date().getFullYear());
    const[carMake, setCarMake]=useState("");
    const[carModel, setCarModel]=useState("");
    
    function handleAddCar(){
       const newCar={year: carYear,
                     make: carMake,
                     model: carModel};
        setCars(c=>[...c, newCar]);
        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }

    function handleRemoveCar(index){

    }

    function handleYearChange(event){
      setCarYear(event.target.value);
    }

    function handleMakeCar(event){
        setCarMake(event.target.value);
    }

    function handleModelCar(event){
        setCarModel(event.target.value);
    }
    
    
    return(
        <div>
            <h2>List of Car Objects</h2>
            <ul>
                {cars.map((car, index)=> <li key={index}>
                {car.year} {car.make} {car.model}</li>)}
            </ul>

            <input type="number" value={carYear} onChange={handleYearChange}></input><br/>
            <input type="text" value={carMake} onChange={handleMakeCar}
            placeholder="Enter Car Make"></input><br/>
            <input type="text" value={carModel} onChange={handleModelCar}
            placeholder="Enter Car Model"></input><br/>
            <button onClick={handleAddCar}>ADD CAR</button>
        </div>
        );
}

export default UpdaterArr