import Botao from 'components/Botao';
import AreaTexto from '../AreaTexto';
import Campos from '../Campos';
import styles from './FormularioDeContato.module.css';
import { useState } from 'react';

function FormularioDeContato({ titulo }) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [projeto, setProjeto] = useState('');

    async function aoSalvar(){
        const novoContato = {
            nome,
            email,
            telefone,
            projeto
        }
    
        // a API usada esta no mockAPI com a conta de julianamartinscamargo@gmail.com
        
        const resposta = await fetch('https://652edb670b8d8ddac0b1fde2.mockapi.io/yvy/Contatos', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(novoContato)
        });

        if (!resposta.ok) {
            throw new Error('Erro ao enviar formulário');
        }
    
        console.log(novoContato)

        setNome('');
        setEmail('');
        setTelefone('');
        setProjeto('');
    }

    return (
        <div className={styles.formularioCompleto} id='formulario'>
            <h9 className={styles.titulo}>{titulo}</h9>

            <form 
            className={styles.formulario}
            onSubmit={(evento) => {
                evento.preventDefault();
                aoSalvar();
            }}
            >
                <Campos
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                    label={'Nome'}
                    tipo={'text'}
                />

                <Campos
                    valor={email}
                    aoAlterado={valor => setEmail(valor)}
                    label={'Email'}
                    tipo={'email'}
                />
                <Campos
                    valor={telefone}
                    aoAlterado={valor => setTelefone(valor)}
                    label={'Telefone'}
                    tipo={'phone'}
                />
                <AreaTexto
                    valor={projeto}
                    aoAlterado={valor => setProjeto(valor)}
                    label={'Detalhes do Projeto'}
                />

                <Botao corDeFundo={'var(--preto-medio)'} cor={'var(--verde-medio)'} tipo={'submit'}>
                    Pedir orçamento
                </Botao>

            </form>
        </div>
    )
}

export default FormularioDeContato;