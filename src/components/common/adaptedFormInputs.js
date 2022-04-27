import PhoneInput from 'react-phone-number-input'
import ru from 'react-phone-number-input/locale/ru.json'
import styles from './formstyle.module.css'

export const PhoneInputAdapter = ({ input, meta }) => (
    <div className={styles.input_wrapper}>
        <div><label>Ваш номер телефона</label> </div>
        <PhoneInput
          
            {...input}
            defaultCountry="BY"
            labels={ru}
            placeholder="Ваш телефон"
            value={input.value} />
        <div className={styles.alarm}>{(meta.error || meta.submitError) && meta.touched && <span>{meta.error || meta.submitError}</span>}</div>
    </div>
)
export const NameInputAdapter = ({ input, meta }) => (
    <div className={styles.input_wrapper}>
        <div><label>Ваше имя</label></div>
        <div><input {...input} type="text" placeholder="Username" /></div>
        <div className={styles.alarm}>{(meta.error || meta.submitError) && (meta.touched || meta.modified) && <span>{meta.error || meta.submitError}</span>}</div>
    </div>
)
export const EmailInputAdapter = ({ input, meta }) => (
    <div className={styles.input_wrapper}>
        <div><label>Ваша почта</label></div>
        <div><input {...input} type="email" placeholder="email" /></div>
        <div className={styles.alarm}>{(meta.error || meta.submitError) && meta.touched && <span>{meta.error || meta.submitError}</span>}</div>
    </div>
)
export const PasswordInputAdapter = ({ input, meta }) => (
    <div className={styles.input_wrapper}>
        <div><label>Ваша почта</label></div>
        <div><input {...input} type="password" placeholder="password" /></div>
        <div className={styles.alarm}>{(meta.error || meta.submitError) && meta.touched && <span>{meta.error || meta.submitError}</span>}</div>
    </div>
)
export const AdressInputAdapter = ({ input, meta }) => (
    <div className={styles.input_wrapper}>
        <div><label>Ваш адрес</label></div>
        <div><input {...input} type="text" placeholder="Ваш адрес" /></div>
        <div className={styles.alarm}>{meta.error && meta.touched && <span>{meta.error || meta.submitError}</span>}</div>
    </div>
)