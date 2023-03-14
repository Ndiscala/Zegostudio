
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import Servicios from './components/Servicios';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Servicios />
      <Main />

      <Footer />
    </div>
  );
}

export default App;
