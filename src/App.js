import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
// import ItemCount from "./components/ItemCount/ItemCount";

function App() {
  return (
    <div>
    <NavBar/>
    <ItemListContainer greeting="React" />
  
    </div>
  );
}

export default App;

