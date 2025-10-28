import Paragrafo from "../../components/Paragráfo";
import Titulo from "../../components/Titulo";
import { GitHubPage } from "./styles";

    const Sobre = () =>(
      <section>
        <Titulo fontSize="16px">Sobre Mim</Titulo>
        <Paragrafo tipo='principal'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate modi aspernatur
          provident distinctio in ut perferendis praesentium nesciunt magnam, pariatur asperiores?
          Possimus adipisci obcaecati similique aperiam ipsam. Veritatis, distinctio soluta.
        </Paragrafo>
        <GitHubPage>
          <img src="https://github-readme-stats.vercel.app/api?username=mestre-dos-magoss&show_icons=true&theme=dracula&include_all_commits=true&count_private=false"/>
          <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=mestre-dos-magoss&layout=compact&langs_count=7&theme=dracula"/>
        </GitHubPage>

      </section>
    )

export default Sobre;
