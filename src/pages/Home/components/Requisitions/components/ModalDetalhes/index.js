import { CardDetalhes, Main } from './style';
import SecundaryButton from '../../../../../../components/SecundaryButton';

const ModalDetalhes = ({ showDetalhes, setShowDetalhes, dados }) => {
  console.log(dados)
  return (<>
    {showDetalhes && <Main className="modal"
      onClick={e => { e.target.className.includes('modal') && setShowDetalhes(false) }}>
      <CardDetalhes>
        <h2>Detalhes</h2>
        <small>Id: {dados.id}</small>
        <div className="linha">
          <p>Categoria:</p>
          <span>{dados.categoria}</span>
        </div>
        <div className="linha">
          <p>Data:</p>
          <span>{dados.data}</span>
        </div>
        <div className="linha">
          <p>Medico:</p>
          <span>{dados.nome_medico}</span>
        </div>
        <div className="linha">
          <p>Tratamento Continuo:</p>
          <span>{dados.tratamento_continuo ? 'Sim' : 'Não'}</span>
        </div>
        <div className="linha">
          <p>Turno:</p>
          <span>{dados.turno}</span>
        </div>
        <SecundaryButton onClick={() => { setShowDetalhes(false) }}>Fechar</SecundaryButton>
      </CardDetalhes>
    </Main>}
  </>
  );
}

export default ModalDetalhes;
