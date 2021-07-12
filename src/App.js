import './App.css';
import Profile from './Profiles/Profiles';
function App() {
  const msg =()=>alert("Hello")
  return (
    <div className="App">
      <header className="App-header">
       <Profile fullName="Naruto Uzumaki" bio="Ninja" profession="Hokage" msg={msg} />

      </header>
    </div>
  );
}

export default App;
