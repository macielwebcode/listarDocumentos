import './DocumentoSolicitacao.css';

const DocumentoSolicitacao = (props) => {
    return (<div className='documento-solicitacao'>
            <div className='cabecalho'>
                <img src='/img/document-img-icon.jpg' alt=''></img>
            </div>
            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h5>{props.nomecliente}</h5>
                <h6>{props.documenttype}</h6>
                <h6>{props.projetotype}</h6>
                <h6>{props.squadteam}</h6>
            </div>
        </div>
    )
}

export default DocumentoSolicitacao