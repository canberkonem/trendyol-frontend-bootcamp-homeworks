import './App.css';
import Filter from './components/Filter/Filter';
import  {useState, useEffect}  from "react"
import Header from './components/Header/Header'
import axios from "axios"
import CharacterList from './components/CharacterList/CharacterList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import CharacterDetails from './components/CharacterDetails/CharacterDetails';

function App() {
  const [characterData, setCharacterData] = useState([])

useEffect(() => {
  const axiosData = async () => {
    const res = await axios("https://rickandmortyapi.com/api/character")
    setCharacterData(res.data.results)
 }
 axiosData();

 
}, [])

  return (
    <Router>
      <div className="background" >
      <Header/>
      <Switch>
        <Route exact path="/">
          <Filter filter={setCharacterData}/>
          <CharacterList characterData={characterData}/>
        </Route>

          <Route path="/character/:id" children={<CharacterDetails />} />
      </Switch>

      </div>
    </Router>
  );
}

export default App;
