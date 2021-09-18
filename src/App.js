import "./App.css";
import Footer from "./Containers/Footer";
import Header from "./Containers/Header";
import Section from "./Containers/Section/Section";

function App() {
  return (
    <div>
      <div className="container">
        <Header />
        <Section />
      </div>{" "}
      <Footer />
    </div>
  );
}

export default App;
