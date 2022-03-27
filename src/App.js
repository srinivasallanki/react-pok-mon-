import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AppNav from './components/AppNav'
import Pokedex from './containers/Pokedex'
import PokemonDetails from './containers/PokemonDetails'

function App() {
  return (
    <Router>
      <AppNav />
      <Routes>
        <Route exact path='/' element={<Pokedex />} />
        <Route exact path='/pokemon/:id' element={<PokemonDetails />} />
      </Routes>
    </Router>
  )
}

export default App
