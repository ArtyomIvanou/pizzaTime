import React from 'react';
import 'react-phone-number-input/style.css'
import formstyles from '../../../common/formstyle.module.css'
import styles from './entry.module.css'
import { Form, Field } from 'react-final-form'
import { EmailInputAdapter, PasswordInputAdapter } from '../../../common/adaptedFormInputs';
import { requiredInput } from '../../../common/formControl';
import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

const Entry = (props) => {

    const sendOrder = (form) => {
        props.loginUser(form)
    }

    const onSubmit = async values => {
        sendOrder(values)
    }
    if (props.user.isAutorizied) {
        return <Redirect to="/" />
    }
    
    return <Form
        onSubmit={onSubmit}
        render={({ handleSubmit,submitError=props.user.isError, control, form, submitting, pristine, values, invalid }) => (
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
                    {submitError && <div className="error">{submitError}</div>}
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
                <NavLink to={'/registration/'}><button className={styles.button_register} >Регистрация</button></NavLink>
            </div>

        )}
    />

}

export default Entry