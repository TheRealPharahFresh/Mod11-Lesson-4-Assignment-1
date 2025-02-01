import { Route, Routes } from 'react-router-dom';
import BrowseCharacters from './Components/BrowseCharacters';
import CharacterDetail from './Components/CharacterDetail';
import Home from './Components/Home';
import Comics from './Components/Comics';
import NavigationBar from './Components/NavigationBar';

function App() {
  return (
    <div className='app-container'>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/characters' element={<BrowseCharacters />} />
        <Route path='/character/:characterId' element={<CharacterDetail />} />
        <Route path='/comics' element={<Comics />} />
        <Route path='/r/' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;


