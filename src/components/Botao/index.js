import styles from './Botao.module.css';

function Botao({ corDeFundo, cor, children, tipo }) {
    const estiloBotao = {
        backgroundColor: corDeFundo,
        color: cor,
        borderColor: cor
    }
    return (
        <button
            style={estiloBotao}
            className={styles.botao}
            type={tipo}
        >
            {children}
        </button>
    )
}

export default Botao;