import './Styles/App.css';
import Header from './Components/Header.tsx';
import CharacterDropdown from './Components/CharacterDropdown'
import MatchupPage from './Components/MatchupPage'
import { ArticleProvider } from './articleContext'
import 'bootstrap/dist/css/bootstrap.min.css';


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
