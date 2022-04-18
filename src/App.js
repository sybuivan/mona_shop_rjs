import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import "./assets/css/reset.scss";
import "./assets/css/variable.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const [showHeader, setShowHeader] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setShowHeader(true);
        
      } else {
        setShowHeader(false);
      }
    };

    console.log(window.screen.width);

    window.addEventListener("scroll", handleScroll);
  }, []);
  // console.log('header scroll', showHeader);

  return (
    <div className="App">
      <Header showHeader={showHeader} />

      <Outlet />

      <Footer />
    </div>
  );
}

export default App;
