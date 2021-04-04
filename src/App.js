import './App.css';
import Header from './Components/header.tsx';
import CharacterDropdown from './Components/characterDropdown'
import MatchupPage from './Components/matchupPage'
import { CharacterProvider } from './characterContext'

var name1 = 'mario'
var name2 = 'dk'
// function setNameLeft() {
//   name1 = value
// }


var matchupPageTitle= (name1+" "+name2)

function App() {
  return (
    <div className="App">
      <Header className='header'/>
      <CharacterProvider>
        <div className='character-search-container'>
          <div className='character-dropdown' id='character-search-left'>
            <CharacterDropdown id={'left'}/>
          </div>
          <div className='character-dropdown' id='character-search-right'>
            <CharacterDropdown id={'right'}/>
          </div>
        </div>
        <MatchupPage name={matchupPageTitle}/>
      </CharacterProvider>
    </div>
  );
}

export default App;
