
import "./App.css";
import { Provider, useSelector } from "react-redux";
import DarkModeSwitcher from "./components/dark-mode/dark-mode-switcher";
import LangSwitcher from "./components/lang-switcher/lang-switcher";
import "./App.css"
import { $t } from "./helpers/locale-helper";
import Counter from "./components/counter/Counter";
// {store} bize setter ve getterları veriyo hepsini merkezi statedeki
function App() {
  const darkMode = useSelector(state =>state.theme.darkMode);
  const currentLang = useSelector(state=>state.locale.lang);// Tüm appi re render etmek için yazdık 
  //Aslında burada currentLan g e ihtiyacımız yok 
  // Merkezi state de ki lang değişince useSelector den dolayı App componenti re render olacak
  // useSelector bulunduğu componenti re render eder  y ouzden tüm complaru e re render etmek için appa e ekledik
  return (
      <div className={darkMode ? "dark" : ""}>
        <DarkModeSwitcher />
        <LangSwitcher/>
        <h1>{$t("hello-world")}</h1>
        <Counter/>
      </div>
  );
}

export default App;
