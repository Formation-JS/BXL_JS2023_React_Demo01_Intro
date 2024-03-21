import './App.css'
import WelcomeMessage from './components/welcome-message/welcome-message.jsx'

function App() {

  return (
    <div>
      <WelcomeMessage name='DigitalCity' />
      <WelcomeMessage />
      <WelcomeMessage name={42} />
    </div>
  )
}

export default App
