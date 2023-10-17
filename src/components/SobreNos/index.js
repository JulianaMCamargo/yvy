import Descricao from "components/SecaoPadrao/Descricao";
import Imagem from "components/SecaoPadrao/Imagem";
import Container from "components/SecaoPadrao/Container";
import Titulo from "components/SecaoPadrao/Titulo";
import sobreNos from 'components/SecaoPadrao/Imagem/sobreNos2.jpeg';

function SobreNos(){
    return(
        <Container corDeFundo='var(--branco)'>
                <Titulo>Sobre Nós</Titulo>
                <Imagem imagem={sobreNos} />
                <Descricao>Use esta página para compartilhar a missão,
                    visão ou história de sua empresa.
                    Diferencie-se da concorrência com uma
                    forte personalidade de marca e coloque
                    seus clientes em primeiro lugar. 
                    <br/>
                    <br/>
                    +8780M²<br/>
                    PROJETADOS
                    <br/>
                    <br/>
                    ATENDIMENTO<br/>
                    100% ONLINE
                </Descricao>
            </Container>
    )
}

export default SobreNos;