import './CampoTexto.css';

const CampoTexto = (props) => {
    

    const userDigitar = (evento) =>{
        props.whenAlter(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={userDigitar} required={props.obrigatorio} placeholder={props.placeholder}></input>
        </div>
     
    )
}

export default CampoTexto