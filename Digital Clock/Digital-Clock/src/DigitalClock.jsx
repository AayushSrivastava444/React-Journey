import React, {useState, useEffect} from 'react';

function DigitalClock(){

    const[time, setTime]=useState(new Date());

    useEffect(()=>{
        const intervalID=setInterval(()=> 
            {setTime(new Date());
             
        }, 1000);

        return()=>{
            clearInterval(intervalID);
        }
    }, []);

    function formatTime(){
        let hours= time.getHours();
        const minutes= time.getMinutes();
        const seconds= time.getSeconds();
        const meridiem=hours>=12 ? "PM" : "AM";
        hours=hours%12 || 12;
          return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
    } g45yko45j
    function padZero(number){
       return (number<=10? "0" : " ")+number;
    }
    
    return(
        <>
        
        <div className="Clock-Container">
        <div className="Clock">
            <span>{formatTime()}</span>
            </div>
            </div>
        
        </>
    );
}

export default DigitalClock