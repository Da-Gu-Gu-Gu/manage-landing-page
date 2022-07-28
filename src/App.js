import './App.css';
import About from './components/About';
import FeedBack from './components/FeedBack';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import Simplify from './components/Simplify';

function App() {
  return (
    <div className="App overflow-x-hidden">
      <Navbar />
      <Landing />
      <About/>
      <FeedBack/>
      <Simplify/>
      <Footer />
    </div>
  );
}

export default App;
