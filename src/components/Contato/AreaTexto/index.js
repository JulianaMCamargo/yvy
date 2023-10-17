import styles from './AreaTexto.module.css';

function AreaTexto({ label, texto, valor, aoAlterado }) {
    const aoDigitado = (evento) => {
        aoAlterado(evento.target.value);
    }
    return (
        <div className={styles.areaTexto}>
            <label>{label}</label>
            <textarea
                value={valor}
                onChange={aoDigitado}
                rows='4'
                required>
                {texto}
            </textarea>
        </div>
    )
}

export default AreaTexto;