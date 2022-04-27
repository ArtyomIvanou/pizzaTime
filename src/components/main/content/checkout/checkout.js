import React from 'react';
import 'react-phone-number-input/style.css'
import styles from './checkout.module.css';
import formStyle from '../../../common/formstyle.module.css'
import { Form, Field } from 'react-final-form'
import { PhoneInputAdapter, NameInputAdapter, AdressInputAdapter } from '../../../common/adaptedFormInputs';
import { requiredInput, validPhoneNumber, maxLength, composeValidators } from '../../../common/formControl';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import CartListUnit from './../../../header/cartButton/userCart/CartListUnit';

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
                <form onSubmit={handleSubmit} className={formStyle.formStyle}>
                    <Field
                        defaultValue={props.user ? props.user.name : undefined}
                        name="username"
                        validate={composeValidators(requiredInput, maxLength(15))}
                        component={NameInputAdapter}>

                    </Field>
                    <Field
                        name="userAdress"
                        defaultValue={props.user ? props.user.adress : undefined}
                        validate={requiredInput}
                        component={AdressInputAdapter}>
                    </Field>
                    <Field

                        name="telephone"
                        defaultValue={props.user ? props.user.telephone : undefined}
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

    cartItem = props.cart.map((i, a) => <li key={a + i.id * i.price + a / i.id * i.weight}>
        <CartListUnit content={i}
            position={a}
            deleteItem={props.deleteItem}
            addAmount={props.addAmount}
            reduceAmount={props.reduceAmount}
            styles={styles} />

    </li>)

    return (
        <div className={styles.checkout}  >
            <div className={styles.phone_input}>{phoneInput}</div>
            <div className={styles.checkout_order}>
                <div className={styles.phone_input}>
                    {myForm}

                </div>
                <div>
                    <ul>
                        {cartItem}
                    </ul>
                    <div className={styles.summary}>{' Итого: '+showSummary + 'р.'}</div>
                </div>


            </div>



        </div>
    );

}

export default Checkout