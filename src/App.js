import './App.css';
import NavBar from './components/NavBar';
import './css/bootstrap.css'
import './css/NavBar.css'

function App() {
  return (
    <>
    <NavBar/>
    <div className="containerimg">
        <img src="/img/portada1.png" alt=""/>
    </div> 
    <button type="button" className="btn btn-primary">Hola</button>
    </>
  );
}

export default App;
