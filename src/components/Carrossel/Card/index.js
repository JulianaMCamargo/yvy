import { Link } from 'react-router-dom';
import styles from './Card.module.css';

function Card({ id, capa, titulo, descricao, localidade, link }) {
    return (
        <div className={styles.container}>
            <Link className={styles.capa} to={link} key={id} style={{backgroundImage: `url(${capa})`}}/>
            
            <div className={styles.textos}>
                <p className={styles.localidade}>{localidade}</p>
                <h4 className={styles.titulo}>{titulo}</h4>
                <p className={styles.descricao}>{descricao}</p>
            </div>
        </div>
    )
}

export default Card;