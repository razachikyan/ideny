import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { SideBar } from "./components/SideBar/SideBar";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="max-w-[1920px] my-0 mx-auto">
      <SideBar />
      <Header />
      <Main />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
