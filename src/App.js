import './App.css';
import Header from './Components/header.tsx';
import CharacterDropdown from './Components/characterDropdown'
import MatchupPage from './Components/matchupPage'
import { ArticleProvider } from './articleContext'


function App() {
  return (
    <div className="App">
      <Header className='header'/>
      <ArticleProvider>
        <div className='character-search-container'>
          <div className='character-dropdown' id='character-search-left'>
            <CharacterDropdown side='left'/>
          </div>
          <div className='character-dropdown' id='character-search-right'>
            <CharacterDropdown side='right'/>
          </div>
        </div>
        <MatchupPage/>
      </ArticleProvider>
    </div>
  );
}

export default App;
