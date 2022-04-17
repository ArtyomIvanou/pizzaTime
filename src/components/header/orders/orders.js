import React from 'react';
import OrderUnitFuncContainer from '../orderUnitFuncContainer';
import { Form, Field } from 'react-final-form';
import { NameInputAdapter, AdressInputAdapter, PhoneInputAdapter } from '../../common/adaptedFormInputs';
import { requiredInput, validPhoneNumber, composeValidators } from '../../common/formControl';

const Orders = (props) => {
    // console.log('Orders')
    let positions
    if (props.content.length > 0) {
        positions = props.content.map((a, i) => {
            const onSubmit = (values) => {
                alert('отправлен на кухню и курьеру')
                console.log(values, a.cart)}
            let finalForm = (<Form
                onSubmit={onSubmit}
                render={({ handleSubmit, control, form, submitting, pristine, values, invalid }) => (
                    <div>
                        <OrderUnitFuncContainer content={a} />
                        <form onSubmit={handleSubmit}>
                            <Field
                                name="usernameFinal"
                                validate={requiredInput}
                                defaultValue={a.form.username}
                                component={NameInputAdapter}>

                            </Field>
                            <Field
                                name="userAdressFinal"
                                defaultValue={a.form.userAdress}
                                validate={requiredInput}
                                component={AdressInputAdapter}>
                            </Field>
                            <Field
                                name="telephoneFinal"
                                defaultValue={a.form.telephone}
                                validate={composeValidators(requiredInput, validPhoneNumber)}
                                component={PhoneInputAdapter}
                            />
                            <div className="buttons">
                                <button type="submit" disabled={submitting || pristine || invalid}>
                                    Оформлено
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
                    </div>

                )}
            />)
            return <li key={a.id}>{finalForm}<div>{a.summary}</div><button onClick={() => { props.deleteOrder(a.id) }}>delete</button></li>
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