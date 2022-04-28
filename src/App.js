import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import "./assets/css/reset.scss";
import "./assets/css/variable.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const [showHeader, setShowHeader] = useState(false);
  const [activeBar, setActiveBar] = useState(false);
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

  const handleOnChange = (state) => {
    setActiveBar(state)
  }

  return (
    <div className={activeBar ? "App header-nav-left--active" : "App"}>
      <Header showHeader={showHeader} activeBar={activeBar} onChange={handleOnChange}/>

      <Outlet />

      <Footer />
    </div>
  );
}

export default App;
