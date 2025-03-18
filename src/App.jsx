import './App.css'
import Foto from './assets/Foto.jpg'

function App() {

  return (
    <>
      <div className="topboard">
        <h1>GUSTAVO H. SANTANA</h1>
        <div className='menu'>
          <button>SOBRE</button>
          <button>FORMAÇÂO</button>
          <button>EXPERIÊNCIAS</button>
          <button>HABILIDADES</button>
          <button>PROJETOS</button>
          <button>CONTATO</button>
        </div>
      </div>

      <div className='apresentacao'>
        <h1>GUSTAVO H. SANTANA
          <h2>&quot;Este espaço foi criado para compartilhar minha <br />trajetória, habilidades 
            e projetos. Sinta-se à vontade <br />para explorar e conhecer mais sobre mim!&quot;</h2>
        </h1>

      </div>
      <div className='sobre'>
        <h1>&quot;Aprendo programação a alguns anos e realizo trabalhos independentes na área,
          deste modo, também busco oportunidades de trabalho no ramo tecnológico para
          ganhar uma experiência mais sólida e me estabelecer enquanto aprimoro minhas
          habilidades técnicas e profissionais.&quot;</h1>
        <img src={Foto} alt="" />
      </div>

    </>
  )
}

export default App
