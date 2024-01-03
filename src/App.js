import logo from './logo.svg';
import './App.css';
import banner from "./img/banner.png";
import projeto from "./img/card-imagem.png";
import projeto2 from "./img/projeto-2.png";
import projeto3 from "./img/projeto-3.png";
import mala from "./img/icon-mala.png";
import futebol from "./img/futebol.png";
import livro from "./img/livro.png";
import about from "./img/sobre-mim2.png";
import react from "./img/icon-react.png";
import sass from "./img/icon-sass.png";
import html from "./img/icon-html.png";
import css from "./img/icon-css.png";
import js from "./img/icon-js.png";
import github from "./img/icon-github.png";
import linkedin from "./img/icon-linkeding.png";
import instagram from "./img/instagram-icon.png";

function App() {
  return (
    <div className='app'>
      <div className="header">
        <div className='logo'><h2>Gabriel</h2></div>
        <div className='navbar'>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#hobbies">Hobbies</a></li>
            <li><a className='servico' href="#servicos">Serviços</a></li>
            <li><a className='contato' href="#contato">Contato</a></li>
          </ul>
        </div>
      </div>

      <section className='home' id='home'>
        <div className='container'>
          <div className='text-banner'>
            <h1><span>Eu sou</span><br />Gabriel Nascimento</h1>
            <h3>Front End - developer</h3>
            <button className='botao'><a href='#'>Meu Curriculo</a></button>
          </div>
          <div className='banner'>
            <img src={banner} alt="banner" title='banner' />
          </div>
        </div>
      </section>

      <section className='about' id='about'>
        <div className='about-container'>
          <div className='about-img'>
            <img src={about} alt="about" title="about" />
          </div>
          <div className='text-about'>
            <h1>Sobre mim</h1>
            <h3>Meu nome é Gabriel Nascimento, tenho 18 anos e atualmente estou cursando Engenharia de Software na Unicesumar. Tenho desenvolvido um sólido conhecimento em linguagens de marcação, como HTML e CSS. Além disso, estou em constante aprimoramento, explorando as possibilidades do JavaScript e adquirindo habilidades fundamentais nessa linguagem de programação.</h3>
          </div>
        </div>
      </section>

      <section className='hobbies' id='hobbies'>
        <div className='hobbies-container'>
          <div className='text-hobbies'>
            <h1>Hobbies</h1>
          </div>
          <div className='hobbies-card'>
            <div className='card'>
              <img src={futebol} alt="Futebol" title="Futebol" />
              <h3>Futebol</h3>
            </div>
            <div className='card'>
              <img src={mala} alt="mala" title="mala" />
              <h3>Viajar</h3>
            </div>
            <div className='card'>
              <img src={livro} alt="Livro" title="Livro" />
              <h3>Livro</h3>
            </div>
          </div>
        </div>
      </section>

      <section className='especialidade' id='especialidade'>
        <div className="container-especialidade">
          <div className='text-especialidade'>
            <h1>Especialidades</h1>
          </div>
          <div className='carrosel-card'>
            <div className='cards'>
              <img src={react} alt="imagem react" title="imagem react" />
              <h1>React</h1>
            </div>
            <div className='cards'>
              <img src={sass} alt="imagem Sass" title="imagem Sass" />
              <h1>Sass</h1>
            </div>
            <div className='cards'>
              <img src={html} alt="imagem Html5" title="imagem Html5" />
              <h1>Html5</h1>
            </div>
            <div className='cards'>
              <img src={css} alt="imagem Css" title="imagem Css" />
              <h1>Css</h1>
            </div>
            <div className='cards'>
              <img src={js} alt="imagem Java-Script" title="imagem java-Script" />
              <h1>Java-Script</h1>
            </div>

            <div className='cards'>
              <img src={react} alt="imagem react" title="imagem react" />
              <h1>React</h1>
            </div>
            <div className='cards'>
              <img src={sass} alt="imagem Sass" title="imagem Sass" />
              <h1>Sass</h1>
            </div>
            <div className='cards'>
              <img src={html} alt="imagem Html5" title="imagem Html5" />
              <h1>Html5</h1>
            </div>
            <div className='cards'>
              <img src={css} alt="imagem Css" title="imagem Css" />
              <h1>Css</h1>
            </div>
            <div className='cards'>
              <img src={js} alt="imagem Java-Script" title="imagem java-Script" />
              <h1>Java-Script</h1>
            </div>

            <div className='cards'>
              <img src={react} alt="imagem react" title="imagem react" />
              <h1>React</h1>
            </div>
            <div className='cards'>
              <img src={sass} alt="imagem Sass" title="imagem Sass" />
              <h1>Sass</h1>
            </div>
            <div className='cards'>
              <img src={html} alt="imagem Html5" title="imagem Html5" />
              <h1>Html5</h1>
            </div>
            <div className='cards'>
              <img src={css} alt="imagem Css" title="imagem Css" />
              <h1>Css</h1>
            </div>
            <div className='cards'>
              <img src={js} alt="imagem Java-Script" title="imagem java-Script" />
              <h1>Java-Script</h1>
            </div>

            <div className='cards'>
              <img src={react} alt="imagem react" title="imagem react" />
              <h1>React</h1>
            </div>
            <div className='cards'>
              <img src={sass} alt="imagem Sass" title="imagem Sass" />
              <h1>Sass</h1>
            </div>
            <div className='cards'>
              <img src={html} alt="imagem Html5" title="imagem Html5" />
              <h1>Html5</h1>
            </div>
            <div className='cards'>
              <img src={css} alt="imagem Css" title="imagem Css" />
              <h1>Css</h1>
            </div>
            <div className='cards'>
              <img src={js} alt="imagem Java-Script" title="imagem java-Script" />
              <h1>Java-Script</h1>
            </div>

            <div className='cards'>
              <img src={react} alt="imagem react" title="imagem react" />
              <h1>React</h1>
            </div>
            <div className='cards'>
              <img src={sass} alt="imagem Sass" title="imagem Sass" />
              <h1>Sass</h1>
            </div>
            <div className='cards'>
              <img src={html} alt="imagem Html5" title="imagem Html5" />
              <h1>Html5</h1>
            </div>
            <div className='cards'>
              <img src={css} alt="imagem Css" title="imagem Css" />
              <h1>Css</h1>
            </div>
            <div className='cards'>
              <img src={js} alt="imagem Java-Script" title="imagem java-Script" />
              <h1>Java-Script</h1>
            </div>

            <div className='cards'>
              <img src={react} alt="imagem react" title="imagem react" />
              <h1>React</h1>
            </div>
            <div className='cards'>
              <img src={sass} alt="imagem Sass" title="imagem Sass" />
              <h1>Sass</h1>
            </div>
            <div className='cards'>
              <img src={html} alt="imagem Html5" title="imagem Html5" />
              <h1>Html5</h1>
            </div>
            <div className='cards'>
              <img src={css} alt="imagem Css" title="imagem Css" />
              <h1>Css</h1>
            </div>
            <div className='cards'>
              <img src={js} alt="imagem Java-Script" title="imagem java-Script" />
              <h1>Java-Script</h1>
            </div>

            <div className='cards'>
              <img src={react} alt="imagem react" title="imagem react" />
              <h1>React</h1>
            </div>
            <div className='cards'>
              <img src={sass} alt="imagem Sass" title="imagem Sass" />
              <h1>Sass</h1>
            </div>
            <div className='cards'>
              <img src={html} alt="imagem Html5" title="imagem Html5" />
              <h1>Html5</h1>
            </div>
            <div className='cards'>
              <img src={css} alt="imagem Css" title="imagem Css" />
              <h1>Css</h1>
            </div>
            <div className='cards'>
              <img src={js} alt="imagem Java-Script" title="imagem java-Script" />
              <h1>Java-Script</h1>
            </div>
          </div>
        </div>
      </section>

      <section className='servicos' id='servicos'>
        <div className='servicos-container'>
          <div className='text-servicos'>
            <h1>Serviços</h1>
          </div>
          <div className='project-containers'>
            <div className='card-projeto'>
              <img src={projeto} alt="projeto web site" title="projeto web site" />
              <h1>Projeto 1</h1>
              <h3>Ferramentas utilizadas</h3>
              <div className='img'>
                <img src={html} alt="html" title="html" />
                <img src={sass} alt="sass" title="sass" />
                <img src={js} alt="java-script" title="java-script" />
              </div>
              <button><a href="https://web-site-barbeiro.vercel.app">Visitar Site</a></button>
              <h3>Projeto desenvolvido com HTML, Sass e JavaScript, este projeto é voltado para a Barbearia, possibilitando a divulgação personalizada e conveniente do seu estabelecimento, proporcionando uma experiência única aos clientes.</h3>
            </div>
            <div className='card-projeto'>
              <img src={projeto2} alt="projeto web site" title="projeto web site" />
              <h1>Projeto 2</h1>
              <h3>Ferramentas utilizadas</h3>
              <div className='img'>
                <img src={html} alt="html" title="html" />
                <img src={sass} alt="sass" title="sass" />
                <img src={js} alt="java-script" title="java-script" />
              </div>
              <button><a href="https://site-educacional.vercel.app/">Visitar Site</a></button>
              <h3>Projeto focado para o ensino educacional da gatronomia, desenvolvido com HTML, Sass e JavaScript, ajuda jovens que tem vontade de aprender as riquezes da gastronomia. Com isso tem aulas disponibilizadas por módulos com o intuito de aprender cada parte com facilidade.</h3>
            </div>
            <div className='card-projeto'>
              <img src={projeto3} alt="projeto web site" title="projeto web site" />
              <h1>Projeto 3</h1>
              <h3>Ferramentas utilizadas</h3>
              <div className='img'>
                <img src={react} alt="html" title="html" />
                <img src={css} alt="sass" title="sass" />
                <img src={js} alt="java-script" title="java-script" />
              </div>
              <button><a href="#">Visitar Site</a></button>
              <h3>Projeto focado para portifólio, desenvolvido com React, css, JavaScript, Serve como um repositório para a mostra de projetos. Divulgar seu trabalho e seus conhecimentos como um profissional.</h3>
            </div>
            <div className='card-projeto2'>
              <div className='card-2'>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='contato' id='contato'>
        <div className='contato-container'>
          <div className='text-contato'>
            <h1>Rede Sociais</h1>
          </div>
          <div className='contato-cards'>
            <div className='card-contato-github'>
              <img src={github} alt="github" title="github" />
              <div className='text-github'>
                <h3><a href="https://github.com/Biel-developer">Github</a></h3>
              </div>
            </div>
            <div className='card-contato-linkedin'>
              <img src={linkedin} alt="linkedin" title="linkedin" />
              <div className='text-linkedin'>
                <h3><a href="https://www.linkedin.com/in/gabriel-nascimento-a5946722a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">linkedin</a></h3>
              </div>
            </div>
            <div className='card-contato-instagram'>
              <img src={instagram} alt="github" title="github" />
              <div className='text-github'>
                <h3><a href="https://www.instagram.com/bielnascimentoandrade?igsh=MTJraGZ3MXJheGdjeg%3D%3D&utm_source=qr">Instagram</a></h3>
              </div>
            </div>
          </div>
          <div className='text-contato'>
            <h1>E-mail</h1>
            <h3>gabriel.naascimento18@gmail.com</h3>
          </div>
        </div>
      </section>

      <footer>
        <h3>© 2023 Gabriel Nascimento - Todos os direitos reservados.</h3>
      </footer>
    </div>


  );
}





export default App;
