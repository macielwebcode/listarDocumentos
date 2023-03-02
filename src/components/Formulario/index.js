import './Formulario.css';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';


const Formulario = (props) =>{


    const projetos =[
        'Web',
        'Web App',
        'App',
        'Robô',
        'IA',
        'Processamento de Dados',
        'Campanha com Mirante',
        'PDV APP',
        'API',
        'Robo Disparo SMS',
        'Robo Disparo de E-mail',
        'API Relatórios'
    ];

    const squads = [
        'Setup',
        'Sustentação',
        'BI'
    ]

    const [nome, setNome] = useState('')
    const [nomecliente, setNomeCliente] = useState('')
    const [documento, setDocumento] = useState('')
    const [projeto, setProjeto] = useState('')
    const [squad, setSquad] = useState('')


    const saveform = (evento) => {
        evento.preventDefault()
        // console.log(nome, nomecliente, documento, projeto, squad)
        props.documentCreated({
            nome,
            nomecliente,
            documento,
            projeto,
            squad
        })
        setNome('')
        setNomeCliente('')
        setDocumento('')
        setProjeto('')
        setSquad('')
    }

    return(
       
        <section className='formulario'>

            <form onSubmit={saveform}>

                <h2>Preencha os Dados para criar um Novo Documento</h2>
                <CampoTexto 
                    valor={nome}
                    obrigatorio={true} 
                    label="Nome Documento" 
                    placeholder="Digite o nome do Documento"
                    whenAlter={valor => setNome(valor)}
                />

                <CampoTexto
                    valor={nomecliente}
                    obrigatorio={true} 
                    label="Nome do Cliente" 
                    placeholder="Digite o nome do Cliente"
                    whenAlter={valor => setNomeCliente(valor)} 
                />

                 <ListaSuspensa 
                    obrigatorio={true} 
                    label="Tipo de Documento" 
                    itens={props.documentos}
                    valor={documento}
                    whenAlter={valor => setDocumento(valor)}
                />

                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Tipo de Projeto" 
                    itens={projetos}
                    valor={projeto}
                    whenAlter={valor => setProjeto(valor)}
                />

                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Nome da Squad" 
                    itens={squads}
                    valor={squad}
                    whenAlter={valor => setSquad(valor)}
                />
               
                
                <Botao>
                    Criar Solicitação Card
                </Botao>
            </form>

        </section>
    )
}

export default Formulario