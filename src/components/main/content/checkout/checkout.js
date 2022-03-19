import React from 'react';
// import  { isValidPhoneNumber } from 'react-phone-number-input'
// import ru from 'react-phone-number-input/locale/ru.json'
// import { useState } from 'react';
import 'react-phone-number-input/style.css'
import './phoneInputStyle.css';
import { Form, Field } from 'react-final-form'
import { PhoneInputAdapter,NameInputAdapter,AdressInputAdapter } from '../../../common/adaptedFormInputs';
import { requiredInput,validPhoneNumber,composeValidators } from '../../../common/formControl';
// const PhoneInputAdapter = ({ input, meta }) => {    
//     return (<div>
//         <div><label>Ваш номер телефона</label> </div>
//         <PhoneInput
//             className='phone_input_wrapper'
//             {...input}
//             defaultCountry="BY"
//             labels={ru}
//             placeholder="Ваш телефон"
//             value={input.value}
//         />
//         <div>{meta.error && meta.touched && <span>{meta.error}</span>}</div>
//     </div>)
// }
// const NameInputAdapter = ({ input, meta  }) => {
//     return (
//         <div>
//             <div><label>Ваше имя</label></div>
//             <div><input {...input} type="text" placeholder="Username" /></div>
//             <div>{meta.error && meta.touched && <span>{meta.error}</span>}</div>
//         </div>
//     )
// }
// const AdressInputAdapter = ({ input, meta }) => {
//     return (
//         <div>
//             <div><label>Ваш адрес</label></div>
//             <div><input {...input} type="text" placeholder="Ваш адрес" /></div>
//             <div>{meta.error && meta.touched && <span>{meta.error}</span>}</div>
//         </div>
//     )
// }

const Checkout = (props) => {
    // const [isValid, changeValid] = useState(false)
    // const [value, setValue] = useState()
    // let validPhoneCheck
    let phoneInput
    // let showButtonSend
    let cartItem
    let showSummary
    let myForm
    // console.log(props.cart)

    const sendOrder = (form) => {
        props.sendOrder(props.cart, props.summary, form)
        // changeValid(false)
    }

    // const validation = (value) => {
    //     setValue(value)
    //     validPhoneCheck = value && isValidPhoneNumber(value) ? true : false
    //     changeValid(validPhoneCheck)
    // }
  
    const onSubmit = async values => {       
       sendOrder(values)

    }

    if (props.cart.length > 0) {
        showSummary = props.summary.toFixed(2)
        // phoneInput = <PhoneInput
        //     defaultCountry="BY"
        //     labels={ru}
        //     placeholder="Ваш телефон"
        //     value={value}
        //     onChange={validation}
        //     error={value ? (isValidPhoneNumber(value) ? undefined : 'Invalid phone number') : 'Phone number required'}
        // />
        myForm = <Form
            onSubmit={onSubmit}
            // validate={values => {
            //     const errors = {}
            //     // if (!values.username) {
            //     //     errors.username = 'Поле обязательное'
            //     // }
            //     // if (!values.userAdress) {
            //     //     errors.userAdress = 'Поле обязательное'
            //     // }
            //     // if (values.telephone) {
            //         // if (isValidPhoneNumber(values.telephone)) {
            //         // }
            //         // else {
            //         //     errors.telephone = 'Неправильный номер'
            //         // }
            //     // } else {
            //     //     errors.telephone = 'Номер обязателен'
            //     // }
            //     return errors
            // }}
            render={({ handleSubmit, control, form, submitting, pristine, values, invalid }) => (
                <form onSubmit={handleSubmit}>
                    <Field
                        name="username"
                        validate={requiredInput}
                        component={NameInputAdapter}>

                    </Field>
                    <Field
                        name="userAdress"
                        validate={requiredInput}
                        component={AdressInputAdapter}>
                    </Field>
                    <Field
                        name="telephone"
                        validate={composeValidators(requiredInput,validPhoneNumber)}
                        component={PhoneInputAdapter}
                    />
                    <div className="buttons">
                        <button type="submit" disabled={submitting || pristine || invalid}>
                            Оформить
                        </button>
                        <button
                            type="button"
                            onClick={form.reset}
                            disabled={submitting || pristine}
                        >
                            Сброс
                        </button>
                    </div>
                </form>
            )}
        />

    } else {
        myForm = null
        showSummary = null
        phoneInput = <div>Корзина пуста</div>
    }

    // showButtonSend = <button onClick={() => { sendOrder() }}>Отправить</button>
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

    return (
        <div className={'checkout'}  >
            <div className='phone_input_wrapper'>{phoneInput}</div>
            {cartItem}
            {myForm}
            <div>{showSummary}</div>
            {/* {isValid && showButtonSend} */}
        </div>
    );

}

export default Checkout