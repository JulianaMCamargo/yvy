import Container from 'components/SecaoPadrao/Container';
import styles from './Contato.module.css';
import Titulo from 'components/SecaoPadrao/Titulo';
import FormularioDeContato from 'components/Contato/FormularioDeContato';
import { Link } from 'react-router-dom';
import Botao from 'components/Botao';
import RedesSociais from 'components/RedesSociais';

function Contato() {
    return (
        <section className={styles.contato}>
            <Container>
                <div className={styles.conteudo}>
                    <FormularioDeContato titulo={'Comece agora o seu projeto!'} />

                    <div className={styles.dadosParaContato}>
                        <div className={styles.contatos}>
                            <p>Tel.: (12) 3456-7890</p>
                            <p>E-mail: ola@grandesite.com.br</p>
                            <p> Social: @grandesite</p>

                        </div>

                        <Botao corDeFundo={'var(--verde-medio)'} cor={'var(--preto-medio)'}>Contacte-nos</Botao>

                        <RedesSociais />
                    </div>

                </div>

            </Container>
        </section>
    )
}

export default Contato;