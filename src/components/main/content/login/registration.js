import React from 'react';
// import 'react-phone-number-input/style.css'
// import './phoneInputStyle.css';
import { Form, Field } from 'react-final-form'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { PhoneInputAdapter,NameInputAdapter,AdressInputAdapter, EmailInputAdapter, PasswordInputAdapter } from '../../../common/adaptedFormInputs';
import { requiredInput,validPhoneNumber,composeValidators } from '../../../common/formControl';


const Registration = (props) => {

    const sendOrder = (form) => {
        props.registrationUser(form)  
       
    }
 
    const onSubmit = async values => {       
       sendOrder(values)
    }
    if (props.user.isAutorizied) {
        return <Redirect to="/" />
    }
        return <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, control, form, submitting, pristine, values, invalid }) => (
                <form onSubmit={handleSubmit} className={'registration'}>
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
                            Зарегистрироваться
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


   
   

   

}

export default Registration