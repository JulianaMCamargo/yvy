import Botao from 'components/Botao';
import styles from './Banner.module.css';
import { Link } from 'react-router-dom';

function Banner() {
    return (
        <section className={styles.bannerImagem}>
            <div className={styles.bannerConteudo}>
                <Link to='./' className={styles.nomeEmpresa}>YVYPORÃ</Link>

                <h1>O melhor lugar é aqui!</h1>

                <div className={styles.botoes}>
                    <Botao corDeFundo={'rgba(0,0,0,0.1)'} cor={'var(--branco)'}>
                        <a href="#formulario" className={styles.link} style={{color: 'var(--branco)'}}>
                            Pedir orçamento
                        </a>
                    </Botao>
                    <Botao corDeFundo={'rgba(248, 251, 248, 0.8)'} cor={'var(--preto-medio)'} >
                        <a href="#projetos" className={styles.link} style={{color: 'var(--preto-medio)'}}>
                            Projetos
                        </a>
                    </Botao>

                </div>
            </div>
        </section>
    )
}

export default Banner;