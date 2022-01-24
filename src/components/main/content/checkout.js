import React from 'react';
import PhoneInput from 'react-phone-number-input'
import ru from 'react-phone-number-input/locale/ru.json'
import { useState } from 'react';
import 'react-phone-number-input/style.css'
const Checkout = (props) => {
    console.log(props.cart)
    const [value, setValue] = useState()
    return (
        <div className={'checkout'}>
            {/* <input type={'text'}></input> */}
            <PhoneInput
            defaultCountry="BY"
                labels={ru}
                placeholder="Ваш телефон"
                value={value}
                onChange={setValue} />
            aaaaaaaaaa
        </div>
    );

}

export default Checkout