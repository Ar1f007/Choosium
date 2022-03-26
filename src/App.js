import Cards from './components/Cards/Cards';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <>
      <header>
        <h1>Choosium</h1>
        <p className="subtitle">😍 Pick your dream front line 😍</p>
      </header>
      <main>
        <Cards />
        <Sidebar />
      </main>
    </>
  );
}

export default App;
