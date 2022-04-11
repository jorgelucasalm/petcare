import Icon from '../../assets/img/Loading.png'
import { Container } from './style';

function Loading () {
    return(
        <>
            <Container>
                <h2>Aguarde um instante...</h2>
                <p>Estamos processando sua solicitação</p>
                <img src={Icon} alt="icone"/>
            </Container>
        </>
    )
}

export default Loading;