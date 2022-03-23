import React from 'react';
import 'react-phone-number-input/style.css'
// import './phoneInputStyle.css';
import { Form, Field } from 'react-final-form'
import {  EmailInputAdapter, PasswordInputAdapter } from '../../../common/adaptedFormInputs';
import { requiredInput } from '../../../common/formControl';
// import { loginUser } from './../../../../redux/user-reducer';


const Entry = (props) => {

    const sendOrder = (form) => {
        props.loginUser( form)  
    }
 
    const onSubmit = async values => {       
       sendOrder(values)
    }
        return <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, control, form, submitting, pristine, values, invalid }) => (
                <div>
                     <form onSubmit={handleSubmit} className={'entry'}>
                     <Field
                        name="userEmail"
                        validate={requiredInput}
                        component={EmailInputAdapter}>

                    </Field>
                    <Field
                        name="userPassword"
                        validate={requiredInput}
                        component={PasswordInputAdapter}>

                    </Field>
                   
                    <div className="buttons">
                        <button type="submit" disabled={submitting || pristine || invalid}>
                            Вход
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
        />

}

export default Entry