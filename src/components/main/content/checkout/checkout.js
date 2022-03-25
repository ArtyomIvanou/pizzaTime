import React from 'react';
import 'react-phone-number-input/style.css'
import './phoneInputStyle.css';
import { Form, Field } from 'react-final-form'
import { PhoneInputAdapter, NameInputAdapter, AdressInputAdapter } from '../../../common/adaptedFormInputs';
import { requiredInput, validPhoneNumber, composeValidators } from '../../../common/formControl';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

const Checkout = (props) => {

    let phoneInput
    let cartItem
    let showSummary
    let myForm
    const sendOrder = (form) => {
        props.sendOrder(props.cart, props.summary, form)
    }

    const onSubmit = async values => {
        sendOrder(values)
    }
    
    if (props.cart.length > 0) {
        showSummary = props.summary.toFixed(2)
        myForm = <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, control, form, submitting, pristine, values, invalid }) => (
                <form onSubmit={handleSubmit}>
                    <Field
                        defaultValue={props.user?props.user.name:undefined}
                        name="username"
                        validate={requiredInput}
                        component={NameInputAdapter}>

                    </Field>
                    <Field
                        name="userAdress"
                        defaultValue={props.user?props.user.adress:undefined}
                        validate={requiredInput}
                        component={AdressInputAdapter}>
                    </Field>
                    <Field
                        name="telephone"
                        defaultValue={props.user?props.user.telephone:undefined}
                        validate={composeValidators(requiredInput, validPhoneNumber)}
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
        return <Redirect to="/" />
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

    return (
        <div className={'checkout'}  >
            <div className='phone_input_wrapper'>{phoneInput}</div>
            {cartItem}
            {myForm}
            <div>{showSummary}</div>
        </div>
    );

}

export default Checkout