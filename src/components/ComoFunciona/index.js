import Container from 'components/SecaoPadrao/Container';
import styles from './ComoFunciona.module.css';
import Titulo from 'components/SecaoPadrao/Titulo';
import imagem from '../SecaoPadrao/Imagem/comoFunciona.png';

function ComoFunciona() {
    return (
        <section className={styles.secao}>
            <Container>
                <div className={styles.conteudo}>
                    <Titulo>Como funciona</Titulo>

                    <div className={styles.roteiro}>
                        
                        <ul className={styles.numerosLista}>
                            <li>01</li>
                            <li>02</li>
                            <li>03</li>
                        </ul>

                        <ul className={styles.passoAPasso}>
                            <li>
                                <h7>Uma agradável conversa</h7>
                                <p>O primeiro passo consiste numa conversa na loja, através da Internet ou em sua casa,
                                    na qual iremos ficar a conhecer os seus gostos,
                                    ideias iniciais e necessidades de estilo de vida
                                </p>
                            </li>

                            <li>
                                <h7>Projetar o seu espaço</h7>
                                <p>remos criar o seu projeto em conjunto,
                                    muitas vezes incorporando os móveis já existentes.
                                    Poderemos otimizar uma só peça, dar conselhos sobre a
                                    combinação de diferentes elementos ou criar um projeto que
                                    abranja toda a casa – a decisão é sua.
                                </p>
                            </li>

                            <li>
                                <h7>Da visão a realidade</h7>
                                <p>O seu projeto irá combinar o seu orçamento com o seu estilo de vida,
                                    refletindo a sua personalidade única. Quando estiver 100% satisfeito,
                                    iremos torná-lo realidade, dando-lhe toda a ajuda de que precisar.
                                </p>
                            </li>

                        </ul>

                        <img className={styles.imagemRoteiro} src={imagem} alt='Imagem ilustrativa'/>
                    </div>

                </div>
            </Container>
        </section>
    )
}

export default ComoFunciona;