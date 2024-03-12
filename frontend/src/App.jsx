import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Container from 'react-bootstrap/Container';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import ProductScreen from './screens/ProductScreen';
import {Provider} from 'react-redux';
import store from "./store/store";


function App() {

  return (
    <>
        <Provider store={store}>
            <Router>
                <Header/>
                <main className='py-3'>
                  <Container>
                    <Routes>
                      <Route path='/' element={<HomeScreen/>} />
                      <Route path='product/:id' element={<ProductScreen/>}/>
                    </Routes>
                  </Container>
                </main>
                <Footer/>
            </Router>
        </Provider>
    </>
  )
}

export default App
