import './App.css'
import ProfilInfo from './components/profil-info/profil-info.jsx'
import WelcomeMessage from './components/welcome-message/welcome-message.jsx'

import CharacterTable from './components/character-table/character-table.jsx';
import duck from './data/duck.json';

function App() {

  return (
    <div>
      {/* <h2>Intro</h2> */}
      {/* <WelcomeMessage name='DigitalCity' /> */}
      {/* <WelcomeMessage /> */}
      {/* <WelcomeMessage name={42} /> */}
      {/* <ProfilInfo firstname='Canard' lastname='Masqué' /> */}
   
      <h2>Collection</h2>
      <CharacterTable characters={duck} />
    </div>
  )
}

export default App
