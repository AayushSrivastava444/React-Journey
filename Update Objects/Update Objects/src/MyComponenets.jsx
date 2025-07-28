import React, {useState} from 'react';

function MyComponents(){
   
     const[car, setCar]=useState({year: 2025, make: "Ford", model: "Mustang" });

     function handleCarYear(event){
        setCar(c=> ({...c, car: event.target.value}));
     }

     function handleCarMake(event){
        setCar(c=> ({...c, make: event.target.value}));
     }

     function handleCarBrand(event){
        setCar(c=> ({...c, brand: event.target.value}));
     }



    return(<div>
        <p>My Favourite car is: {car.make} {car.model                                                                                                                                                                                                                                                                                                                          } {car.year}</p>
        <input type="text" value={car.make} onChange={handleCarMake}></input><br/>
        <input type="text" value={car.model} onChange={handleCarBrand}></input><br/>
        <input type="number" value={car.year} onChange={handleCarYear}></input><br/>
    </div>

    );
}
export default MyComponents