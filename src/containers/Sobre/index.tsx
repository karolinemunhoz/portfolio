import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet iste sequi
      voluptatibus rem temporibus, dolorem, aut ex est iusto voluptates
      doloremque ad. Laborum nihil debitis dolor doloremque consequatur
      recusandae molestias.
    </Paragrafo>
    <GithubSecao>
      <div>
        <img
          src="https://github-readme-stats-one-bice.vercel.app/api?username=karolinemunhoz&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"
          alt="GitHub stats"
        />

        <img
          src="https://github-readme-stats-one-bice.vercel.app/api/top-langs/?username=karolinemunhoz&layout=compact&langs_count=7&theme=dracula"
          alt="Top languages"
        />
      </div>
    </GithubSecao>
  </section>
)

export default Sobre
