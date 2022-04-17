import PhoneInput from 'react-phone-number-input'
import ru from 'react-phone-number-input/locale/ru.json'

export const PhoneInputAdapter = ({ input, meta }) => (
    <div>
        <div><label>Ваш номер телефона</label> </div>
        <PhoneInput
            className='phone_input_wrapper'
            {...input}
            defaultCountry="BY"
            labels={ru}
            placeholder="Ваш телефон"
            value={input.value} />
        <div>{(meta.error || meta.submitError) && meta.touched && <span>{meta.error || meta.submitError}</span>}</div>
    </div>
)
export const NameInputAdapter = ({ input, meta }) => (
    <div>
        <div><label>Ваше имя</label></div>
        <div><input {...input} type="text" placeholder="Username" /></div>
        <div>{(meta.error || meta.submitError) && meta.touched && <span>{meta.error || meta.submitError}</span>}</div>
    </div>
)
export const EmailInputAdapter = ({ input, meta }) => (
    <div>
        <div><label>Ваша почта</label></div>
        <div><input {...input} type="email" placeholder="email" /></div>
        <div>{(meta.error || meta.submitError) && meta.touched && <span>{meta.error || meta.submitError}</span>}</div>
    </div>
)
export const PasswordInputAdapter = ({ input, meta }) => (
    <div>
        <div><label>Ваша почта</label></div>
        <div><input {...input} type="password" placeholder="password" /></div>
        <div>{(meta.error || meta.submitError) && meta.touched && <span>{meta.error || meta.submitError}</span>}</div>
    </div>
)
export const AdressInputAdapter = ({ input, meta }) => (
    <div>
        <div><label>Ваш адрес</label></div>
        <div><input {...input} type="text" placeholder="Ваш адрес" /></div>
        <div>{meta.error && meta.touched && <span>{meta.error || meta.submitError}</span>}</div>
    </div>
)