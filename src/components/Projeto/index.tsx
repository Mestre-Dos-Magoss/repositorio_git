import Paragrafo from "../Paragráfo";
import Titulo from "../Titulo";
import {Card,LinkButton} from './styles'

const Projeto = () =>(
  <Card>
    <Titulo fontSize="14px">Lista de Tarefas</Titulo>
    <Paragrafo tipo="secundario">Lista de Tarefas feitas com Vue.JS</Paragrafo>
    <LinkButton href="">Visualizar</LinkButton>
  </Card>
)

export default Projeto;
