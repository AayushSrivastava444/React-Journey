import React, {useState} from 'react';

function OnChange(){
   

    const[quantity, setQuantity]=useState();

    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }

    const [shipping, setShipping]=useState();

    function handleShippingDelivery(event){
        setShipping(event.target.value);
    }

    const[instructions, setInstructions]=useState();

    function handleDeliveryInstructions(event){
       setInstructions(event.target.value);
    }

    const[payment, setPayment] = useState();

    function handlePaymentOptions(event){
        setPayment=(event.target.value);
    }

    return(
        <>
        <div>
            <p>Quantity: {quantity}</p>
            <input value={quantity} onChange={handleQuantityChange} type="number"></input>
        </div>

        <div>

            <p>Instructions: {instructions}</p>
            <input value={instructions} onChange={handleDeliveryInstructions} placeholder="Enter delivery instructions"></input>
        </div>

        <div>
            <p>Payment: {payment}</p>
            <select value={payment} onChange={handlePaymentOptions}>
                <option>Select your payment option</option>
                <option>Visa</option>
                <option>Credit Card</option>
                <option>Debit Card</option>
            </select>
        </div>

        <div>
            <p>Shipping: {shipping}</p>
            <label><input type="radio" value="Pick Up"
            checked={shipping==="Pick Up"}
            onChange={handleShippingDelivery}/>Pick Up</label><br/>
            

            
            <label><input type="radio" value="Delivery"
            checked={shipping==="Delivery"}
            onChange={handleShippingDelivery}/>
             Delivery</label>
           
        </div>
        </>
    );
}

export default OnChange