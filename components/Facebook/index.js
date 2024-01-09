
import styles from './Facebook.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Facebook () {
    return (
       <p className={styles.face}><Image src={'/images/facebook-icon.png' } alt="Facebook logo" width={20} height={20}/><Link href={'/'} className={styles.logo}>Log in with Facebook</Link></p>
    )
}



