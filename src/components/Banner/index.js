import styles from './Banner.module.css';
import { Link } from 'react-router-dom';

function Banner() {
    return (
        <section className={styles.bannerImagem}>
            <div className={styles.bannerConteudo}>
                <Link to='./'>YVYPORÃ</Link>
                <h1>O melhor lugar é aqui!</h1>
                <div className={styles.botoes}>
                    <button>Peça seu orçamento</button>
                    <button>Contacte-nos</button>
                </div>
            </div>
        </section>
    )
}

export default Banner;