import './App.css';
import Contact from './components/Contact/Contact';
import Profile from './components/Profile/Profile';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="app">
      <Profile className='app__content' />
      <Projects className='app__content'  />
      <Contact  className='app__content' />
    </div>
  );
}

export default App;
