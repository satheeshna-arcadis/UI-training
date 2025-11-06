
import './App.css';
import Sidebar from './components/sidebar/sidebar';
import Main from './components/main/main';


function App() {
  return (
    <div class="flex h-screen font-sans text-gray-800 overflow-hidden">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
