 

 function ClickButton(){

       const handleClick=(e) => e.target.textContent="OK";

       return(
        <button onDoubleClick={(e)=> handleClick(e)}>Click Me 😊</button>
       );
 }
 export default ClickButton