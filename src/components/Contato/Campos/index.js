import styles from './Campos.module.css';

function Campos({ label, tipo, aoAlterado, valor }) {
    const aoDigitado = (evento) => {
        aoAlterado(evento.target.value);
    }

    return (
        <div className={styles.campo}>
            <label>{label}</label>
            <input
                value={valor}
                onChange={aoDigitado}
                type={tipo}
                required 
            />
        </div>
    )
}

export default Campos;