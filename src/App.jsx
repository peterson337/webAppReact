import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh'}} 
    className='d-flex flex-column justify-content-between '>
      <div>
      <Header />
      <Main />

      </div>
      <Footer />
    </div>
  );
}

export default App;
