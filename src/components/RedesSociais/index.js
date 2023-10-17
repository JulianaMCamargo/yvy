import { Link } from 'react-router-dom';
import styles from './RedesSociais.module.css';
import {AiOutlineInstagram} from 'react-icons/ai'; 
import {FaFacebookF} from 'react-icons/fa';
import {BsInstagram, BsWhatsapp, BsPinterest, BsFacebook} from    'react-icons/bs';



function RedesSociais(){
    return(
        <div className={styles.redesSociais}>
            <Link to={'#'} className={styles.icones}><BsInstagram /></Link>
            <Link to={'#'} className={styles.icones}><BsFacebook /></Link>
            <Link to={'#'} className={styles.icones}><BsWhatsapp /></Link>
            <Link to={'#'} className={styles.icones}><BsPinterest /></Link>
        </div>
    )
}

export default RedesSociais;