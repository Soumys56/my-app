import "./App.css";
import Main from "./componet/Main";
import Header from "./componet/Header";
import Slider from "./componet/Slider";
import CardSection from "./componet/CardSection";
import Deals from "./componet/Deals";
import { Selling } from "./componet/Selling";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Slider />
      <CardSection />
      <Deals />
      <Selling />
    </div>
  );
}

export default App;
