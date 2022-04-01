import './assets/css/reset.scss'
import './assets/css/variable.scss'
import Banner from './components/Banner';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      
      <Banner />

      <Content />

      <Footer />
    </div>
  );
}

export default App;
