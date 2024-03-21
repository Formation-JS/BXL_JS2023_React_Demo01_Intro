import './App.css'
import ProfilInfo from './components/profil-info/profil-info.jsx'
import WelcomeMessage from './components/welcome-message/welcome-message.jsx'

function App() {

  return (
    <div>
      <WelcomeMessage name='DigitalCity' />
      {/* <WelcomeMessage /> */}
      {/* <WelcomeMessage name={42} /> */}

      <ProfilInfo firstname='Canard' lastname='Masqué' />
    </div>
  )
}

export default App
