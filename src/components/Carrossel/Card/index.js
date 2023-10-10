import { Link } from 'react-router-dom';
import styles from './Card.module.css';

function Card({ id, capa, titulo, descricao, localidade, link }) {
    return (
        <div className={styles.container}>
            <Link className={styles.link} to={link} key={id}>
                <img src={capa} alt={titulo} className={styles.capa} />
            </Link>
            <div className={styles.textos}>
                <p>{localidade}</p>
                <h4 className={styles.titulo}>{titulo}</h4>
                <p>{descricao}</p>
            </div>
        </div>
    )
}

export default Card;