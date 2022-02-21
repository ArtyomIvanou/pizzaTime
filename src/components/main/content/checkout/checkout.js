import React from 'react';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import ru from 'react-phone-number-input/locale/ru.json'
import { useState } from 'react';
import 'react-phone-number-input/style.css'
import './phoneInputStyle.css';
// import axios from 'axios';
// import { ordersAPI } from '../../../../api/api';
const Checkout = (props) => {
    const [isValid, changeValid] = useState(false)
    const [value, setValue] = useState()
    let validPhoneCheck
    let phoneInput
    let showButtonSend
    let cartItem
    let showSummary
    // console.log(props.cart)
    let sendOrder = () => {
 
        props.sendOrder(props.cart,props.summary,value) 
       
        changeValid(false)
    }
   
    const validation = (value) => {
        setValue(value)
        validPhoneCheck = value && isValidPhoneNumber(value) ? true : false
        changeValid(validPhoneCheck)
    }

    if (props.cart.length > 0) {
        showSummary = props.summary.toFixed(2)
        phoneInput = <PhoneInput
            defaultCountry="BY"
            labels={ru}
            placeholder="Ваш телефон"
            value={value}
            onChange={validation}
            error={value ? (isValidPhoneNumber(value) ? undefined : 'Invalid phone number') : 'Phone number required'}
        />
    } else {
        showSummary = null
        phoneInput = <div>Корзина пуста</div>
    }
    if (isValid) {
        showButtonSend = <button onClick={() => { sendOrder() }}>Отправить</button>
    } else {
        showButtonSend = null
    }
    cartItem = props.cart.map((a, i) => {
        return <div key={Math.random()}>
            <span>{a.title}</span><span>{'  '}</span>
            <span>{a.priceName}</span><span>{'  '}</span>
            <span>{a.addedDoughName}</span><span>{'  '}</span>
            <span>{a.weight + a.addedWeight}<span>{'гр'}</span></span><span>{'  '}</span>
            <span>{a.price + a.addedPrice}</span><span>{'р'}</span><span>{'  '}</span>
            <span>{a.amount}</span><span>{'шт'}</span><span>{'  '}</span>
            <button onClick={() => props.deleteItem(i)}>delete</button>
        </div>
    })
    // console.log(value)
    return (
        <div className={'checkout'}  >
            <div className='phone_input_wrapper'>{phoneInput}</div>
            {cartItem}
            <div>{showSummary}</div>
            {showButtonSend}
        </div>
    );

}

export default Checkout