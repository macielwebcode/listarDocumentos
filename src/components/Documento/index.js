import DocumentoSolicitacao from '../DocumentoSolicitacao';
import './Documento.css';

const Documento = (props) =>{

    const css = { backgroundColor: props.corSecundaria }

    return(
        props.documentosList.length > 0 && <section className='container-documentos' style={css}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='documentos-item-card'>
                {props.documentosList.map( documento => <DocumentoSolicitacao key={documento.nome} 
                nome={documento.nome} 
                nomecliente={documento.nomecliente}
                documenttype={documento.documento}
                projetotype={documento.projeto}
                squadteam={documento.squad}
                />)}
            </div>
        </section>
    )
}

export default Documento