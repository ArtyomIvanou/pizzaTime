import React from 'react';
import OrderUnitFuncContainer from '../orderUnitFuncContainer'
import axios from 'axios';

const Orders = (props) => {
    const deleteOrder = (id) => {
        axios.delete(`http://localhost:3001/orders/${id}`, {
        })
            .catch(error => {
                console.log(error);
            })
        axios.get(`http://localhost:3001/orders/`, {
        })
            .then(function (response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.data;
            })
            .then(resp => {
                return props.watchOrders(resp)
                // console.log(resp);
            })
            .catch(error => {
                console.log(error);
            });
        axios.get(`http://localhost:3001/orders/`, {
        })
            .then(function (response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.data;
            })
            .then(resp => {
                return props.watchOrders(resp)
            })
            .catch(error => {
                console.log(error);
            });

    }

    let positions
    if (props.content.length > 0) {
        positions = props.content.map((a, i) => {
            // console.log(a.summary)
            return <li key={a.id}><div>{a.tel}</div><OrderUnitFuncContainer content={a} ></OrderUnitFuncContainer><div>{a.summary}</div><button onClick={() => { deleteOrder(a.id) }}>delete</button><button onClick={() => { alert('отправлен на кухню и курьеру') }}>оформлено</button></li>
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