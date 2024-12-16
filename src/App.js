import "./styles/style.scss";

// import components

import NavbarWrapper from "./components/NavbarWrapper";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import Questions from "./components/Questions";
import Pages from "./components/Pages";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <NavbarWrapper />
      <Hero />
      <Benefits />
      <Testimonials />
      <Questions />
      <Pages />
      <Footer />
    </div>
  );
}

export default App;
