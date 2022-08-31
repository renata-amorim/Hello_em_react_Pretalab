import Titulo from './components/titulo/titulo'
import Relogio from './components/relogio/Relogio'
import Foto from './components/foto/Foto'
import Diva from './components/diva/Diva'
import Etiqueta from './components/etiqueta/Etiqueta'
import Lowercase from './components/lowercase/Lowercase'
import Uppercase from './components/uppercase/Uppercase'
import Formulario from './components/formulario/Formulario'
import { Lista } from './components/lista/Lista'
import { List } from './components/list/List'
import './App.css'


function App() {
  return (

    <div className='card'> 
      <Titulo />
      <Etiqueta> Relogio </Etiqueta>
      <Relogio />
      <Diva info ="Beyoncé - The Beyoncé Experience Live, 2007" />
      <Foto imagem="https://c.tenor.com/0VILJG2ki4kAAAAC/gif.gif" />
      <Diva info ="Beyoncé - Countdown, 2011" />
      <Foto imagem="https://media1.giphy.com/media/9salgRp1eo60E/giphy.gif" />
      <Diva info ="Beyoncé - Beychella, 2018" />
      <Foto imagem="https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_lossy/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F81fb5fd9-5233-41cb-a669-3d178c649cf6_480x300.gif" />
      <Lowercase info="RENATA AMORIM" />
      <Uppercase texto="pipoca" />
      <Etiqueta> Formulário </Etiqueta>
      <Formulario />
      <Etiqueta> Filmes </Etiqueta>
      <Lista />
      <Etiqueta> Séries </Etiqueta>
      <List />
    </div>
    
  )
}

export default App