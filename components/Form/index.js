
import styles from './Form.module.css'

export default function UserName () {
    return (
        <>
            <form className={styles.form}>

                <input 
                type="email"
                placeholder="Phone number or email"
                className={styles.box}/>



                <input 
                type="password"
                required
                className={styles.box}/>

            </form>
        </>
    )
}







