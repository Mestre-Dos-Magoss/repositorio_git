import Avatar from "../../components/Avatar";
import Paragrafo from "../../components/Paragráfo";
import Titulo from "../../components/Titulo";
import { Descricao, SidebarContainer, ThemeButton } from "./styles";

const Sidebar = () =>(
    <aside>
      <SidebarContainer>
        <Avatar/>
        <Titulo fontSize="20px">Chefe</Titulo>
        <Paragrafo fontSize={16} tipo="secundario">MestreDoMagoss</Paragrafo>
        <Descricao tipo="principal" fontSize={12}>Engenheiro Front-End</Descricao>
        <ThemeButton>Trocar Tema</ThemeButton>
      </SidebarContainer>
    </aside>
)

export default Sidebar;
