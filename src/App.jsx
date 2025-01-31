import { Route, Routes } from "react-router-dom";
import CharacterList from './Components/CharacterList';
import CharacterDetail from './Components/CharacterDetail';
import NavigationBar from "./Components/NavigationBar";

function App() {
  return (
    <div className='app-container'>
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<CharacterList />} />
        <Route path="/character/:characterId" element={<CharacterDetail />} /> 
      </Routes>
    </div>
        
  );
}

export default App;

