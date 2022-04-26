import { isValidPhoneNumber } from 'react-phone-number-input'
export const requiredInput = (value) => {
    if (value) {
        return undefined
    }
    else {
        return "Поле обязательное"
    }
}
export const maxLength = max => value =>
    value.length < max ? undefined : `Должно быть меньше ${max} символов`;
export const validPhoneNumber = (value) => {
    if (isValidPhoneNumber(value)) {
        return undefined
    }
    else {
        return 'Неправильный номер'
    }

}
export const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined);