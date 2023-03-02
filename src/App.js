import { useState } from 'react';
import Banner from './components/Banner';
import Documento from './components/Documento';
import Formulario from './components/Formulario';


function App() {

  const documentos = [
    {
      nome: 'Escopo do Projeto',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    },
    {
      nome: 'Processo IA',
      corPrimaria: '#57C278',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Processo SQL',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFEEDF'
    },
    {
      nome: 'Rotina Banco de Dados',
      corPrimaria: '#000000',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'API',
      corPrimaria: '#82CFFA',
      corSecundaria: '#FFEEDF'
    }
  ]

  // cor primaria é de fundo
  // cor secundaria é a borda bottom
  
  const [documentositens, setDocumentositens] = useState([])

  const aonewCreateDocument = (documentitem) => {
    // console.log(documentitem)
    setDocumentositens([...documentositens, documentitem])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario  documentos={documentos.map(documento => documento.nome)} documentCreated={documentitem => aonewCreateDocument(documentitem)}/>

      {documentos.map(documentoi =><Documento 
        key={documentoi.nome} 
        nome={documentoi.nome} 
        corPrimaria={documentoi.corPrimaria} 
        corSecundaria={documentoi.corSecundaria}
        documentosList={documentositens.filter(documento => documento.documento === documentoi.nome)}
      /> )}

      
    </div>
  );
}

export default App;
