
//onChange =  event handler used with form elemnt
   //Triggers Funvtion every time the value of the input chanGES


import React , {useState} from 'react';



function Macomponent()
{
   const [name, setName]  = useState("henry");
   const [quantity, setQuantity] = useState(1);
   const [comment , setComment] = useState("");
   const [payment, setPayment] = useState("");
   const [shipping,setShipping] = useState("Delivery");

   function  handleNameChange(event) {
      setName(event.target.value); 

   }

     function handleQuantityChange(event) {
          setQuantity(event.target.value);
     }


     function handleCommentChange(event) {

            setComment(event.target.value);
     }

    function handlePaymentChange(event) {
         setPayment(event.target.value);
    }

   function   handleShippingChange(event) {
         setShipping(event.target.value);
   }

   return (<>
        <div>

         {/* input */}
            <input value={name} onChange={handleNameChange}/>
            <p>Name: {name}</p>

            <input  value={quantity} onChange={handleQuantityChange}  type='number'/>

            <p>Quantity: {quantity}</p>

           
           {/* Textarea */}

            <textarea value={comment} onChange={handleCommentChange}  placeholder="'Enter delivery instructions'"/>
             
             <p>Comment:{comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
               
                   <option value="">Select an option</option>
                   <option value="visa">Visa</option>
                   <option value="MasterCard ">MasterCard</option>
                   <option value="Giftcard">Giftcard</option>
               </select>                   
                
            <p>Payment: {payment}</p>

           <label>
                <input  type='radio' value="pick up"
                       checked={shipping === "pick up"}  onChange={handleShippingChange}/>
                  Pick up
           </label><br/>

           <label>
                <input  type='radio' value="Delivery"
                       checked={shipping === "Delivery"}  onChange={handleShippingChange}/>
                 Delivery
           </label><br/>

           <p>Shipping method: {shipping}</p>
        </div>

   </>);

}

export default Macomponent