import Projetos from "./containers/Projetos";
import Sidebar from "./containers/Sidebar";
import Sobre from "./containers/Sobre";
import { Container } from "./globalStyles";

function App() {
  return (
    <>
     <Container>
        <Sidebar/>
        <main>
          <Sobre/>
          <Projetos/>
        </main>
     </Container>
    </>
  );
}

export default App;

// import {Botao, BotaoCancelar} from './styles'
//     <>

//       <Botao fontSize='15px'>Dai mano pode crer!!</Botao>
//       <Botao fontSize='10px' principal>CLique em Mim Chefe!</Botao>
//       <Botao as='p' fontSize={''} principal={false}>Não deu certo mesmo</Botao>
//       <BotaoCancelar as='a'>Não deu certo mesmo</BotaoCancelar>
//       <Botao principal><span>Meu nome é?</span></Botao>
//     </>
