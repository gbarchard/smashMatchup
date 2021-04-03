// import logo from './logo.svg';
import './App.css';
import Header from './Components/header.tsx';
import CharacterDropdown from './Components/characterDropdown'
import MatchupPage from './Components/matchupPage'


var name1 = 'name1'
var name2 = 'name2'
function setNameLeft() {
  name1 = value
}


var matchupPageTitle= name1+name2

function App() {
  return (
    <div className="App">
      <Header className='header'/>
      <div className='character-search-container'>
        <div className='character-dropdown' id='character-search-left'>
          <CharacterDropdown />
        </div>
        <div className='character-dropdown' id='character-search-right'>
          <CharacterDropdown />
        </div>
      </div>
      <MatchupPage name={matchupPageTitle}/>
    </div>
  );
}

export default App;
