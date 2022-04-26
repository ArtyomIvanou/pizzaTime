import React from 'react';
import { Form, Field } from 'react-final-form'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { PhoneInputAdapter, NameInputAdapter, AdressInputAdapter, EmailInputAdapter, PasswordInputAdapter } from '../../../common/adaptedFormInputs';
import { requiredInput, validPhoneNumber, maxLength, composeValidators } from '../../../common/formControl';
import formstyles from '../../../common/formstyle.module.css'
import styles from './entry.module.css'

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
        render={({ handleSubmit, submitError = props.user.isError, control, form, submitting, pristine, values, invalid }) => (
            <div className={styles.entry}>
                <form onSubmit={handleSubmit} className={formstyles.formStyle}>
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
                        validate={composeValidators(requiredInput, maxLength(15))}
                        component={NameInputAdapter}>

                    </Field>
                    <Field
                        name="userAdress"
                        validate={requiredInput}
                        component={AdressInputAdapter}>
                    </Field>
                    <Field
                        name="telephone"
                        validate={composeValidators(requiredInput, validPhoneNumber)}
                        component={PhoneInputAdapter}
                    />
                    {submitError && <div className="error">{submitError}</div>}
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
            </div>

        )}
    />









}

export default Registration