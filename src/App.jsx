import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import User from './Pages/User/User'
import './App.css'
import Products from './Pages/Products/Products'

function App() {

  return (
    <div className="App">
      <Router>
        <Header/>
          <Routes>
            <Route path='/' exact element={<User/>}/>
            <Route path='/products' element={<Products/>}/>
          </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
