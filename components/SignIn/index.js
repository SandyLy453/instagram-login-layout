import Link from 'next/link'
import styles from './SignIn.module.css'

export default function SignIn () {
    return (
        <p className={styles.p}>Don't have an account? <Link href={'/'} className={styles.signin}> Sign in </Link></p>
    )
}


