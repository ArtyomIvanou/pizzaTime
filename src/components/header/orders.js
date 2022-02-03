import React from 'react';
import OrderUnitFuncContainer from './orderUnitFuncContainer'
import axios from 'axios';

const Orders = (props) => {
// console.log(props.content)
const deleteOrder=(id)=>{
    axios.delete(`http://localhost:3001/orders/${id}`, {
        // id: 6,
        // id: id,
        
      
        
        
        
    })
   
    
    .catch(error => {
        console.log(error);
    })
    
    axios.get(`http://localhost:3001/orders/`, {
        // id: 6,
        // id: id,
    
        
    })
    .then(function (response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
      
        
        return response.data;
    })
    .then(resp => {
      return  props.watchOrders(resp)
        // console.log(resp);
    })
    .catch(error => {
        console.log(error);
    });
    
}

let positions
if (props.content.length>0) {
    // console.log(';good')
    positions=props.content.map((a,i)=>{
    
        return <li key={a.id}><div>{a.tel}</div><OrderUnitFuncContainer content={a}></OrderUnitFuncContainer><button onClick={() => { deleteOrder(a.id) }}>delete</button></li>
    })
} else {
    positions=<div>empty</div>
}
// let positions=props.content.map((a,i)=>{
    
//     return <li key={a.id}><div>{a.tel}</div><OrderUnitFuncContainer content={a}></OrderUnitFuncContainer><button onClick={() => { deleteOrder(a.id) }}>delete</button></li>
// })
    return (
        <div className={'orders'}>
           <ul>
             {positions}  
           </ul>
        </div>
    );

}

export default Orders