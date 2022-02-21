import React from 'react';
import OrderUnitFuncContainer from '../orderUnitFuncContainer'
// import axios from 'axios';
// import { ordersAPI } from '../../../api/api';
// import { getOrders,deleteOrderApi } from '../../../api/api';
const Orders = (props) => {
  

    let positions
    if (props.content.length > 0) {
        positions = props.content.map((a, i) => {
            // console.log(a.summary)
            return <li key={a.id}><div>{a.tel}</div><OrderUnitFuncContainer content={a} ></OrderUnitFuncContainer><div>{a.summary}</div><button onClick={() => { props.deleteOrder(a.id) }}>delete</button><button onClick={() => { alert('отправлен на кухню и курьеру') }}>оформлено</button></li>
        })
    } else {
        positions = <div>empty</div>
    }

    return (
        <div className={'orders'}>
            <ul>
                {positions}
            </ul>
        </div>
    );

}

export default Orders