import Descricao from "components/SecaoPadrao/Descricao";
import Imagem from "components/SecaoPadrao/Imagem";
import Container from "components/SecaoPadrao/Container";
import Titulo from "components/SecaoPadrao/Titulo";
import chamada from 'components/SecaoPadrao/Imagem/chamada2.jpeg';

function Chamada() {
    return (
        <Container corDeFundo='var(--branco)'>
            <Titulo>Ajudamos você a tomar a melhor decisão.</Titulo>
            <Imagem imagem={chamada} />
            <Descricao>
                <p>Reunião de vídeo com nossos especialistas</p>
                <p>Veja como ficará seu ambiente em 3D.</p>
                <p>Lista de todos os itens utilizados no projeto.</p>
                <p>Detalhamentos em PDF de tudo que você precisa</p>
            </Descricao>
        </Container>
    )
}

export default Chamada;