import PhoneInput from 'react-phone-number-input'
import ru from 'react-phone-number-input/locale/ru.json'



export const PhoneInputAdapter = ({ input, meta }) => {
    return (
        <div>
            <div><label>Ваш номер телефона</label> </div>
            <PhoneInput
                className='phone_input_wrapper'
                {...input}
                defaultCountry="BY"
                labels={ru}
                placeholder="Ваш телефон"
                value={input.value}
            />
            <div>{meta.error && meta.touched && <span>{meta.error}</span>}</div>
        </div>
    )
}
export const NameInputAdapter = ({ input, meta }) => {
    return (
        <div>
            <div><label>Ваше имя</label></div>
            <div><input {...input} type="text" placeholder="Username" /></div>
            <div>{meta.error && meta.touched && <span>{meta.error}</span>}</div>
        </div>
    )
}
export const AdressInputAdapter = ({ input, meta }) => {
    return (
        <div>
            <div><label>Ваш адрес</label></div>
            <div><input {...input} type="text" placeholder="Ваш адрес" /></div>
            <div>{meta.error && meta.touched && <span>{meta.error}</span>}</div>
        </div>
    )
}