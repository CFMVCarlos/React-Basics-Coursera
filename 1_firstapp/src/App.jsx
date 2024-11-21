import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import BirdSound from "./components/BirdSounds";
import Btn from "./components/Btn";
import Footer from "./components/Footer";
import InputComponent from "./components/InputBox";
import Intro1 from "./components/Intro1";
import Intro2 from "./components/Intro2";
import Intro3 from "./components/Intro3";
import ModeToggler from "./components/ModeToggler";
import MyVideo from "./components/MyVideo";
import Nav from "./components/Nav";
import Promo from "./components/Promo";
import RegisterForm from "./components/RegisterForm";

import salad from "./assets/images/salad.jpg"; // Image for salad

// Header component that displays the title of the app
function Header() {
  return <h1>Hello world</h1>;
}

function App() {
  // Random image URL for dynamic content
  const randomImageUrl = "https://picsum.photos/400/265";

  return (
    <>
      {/* Header Section */}
      <Header />
      <hr />

      {/* Navigation Bar */}
      <Nav />

      {/* Introductory Sections */}
      <Intro1 />
      <Intro2 />
      <Intro3 />
      
      {/* Promotional Section */}
      <Promo />

      {/* Footer */}
      <Footer />
      
      <hr />
      
      {/* Interactive Button Component */}
      <Btn />
      <hr />
      
      {/* Mode Toggler for Dark/Light mode */}
      <ModeToggler />
      <hr />
      
      {/* Input Box Component */}
      <InputComponent />
      <hr />
      
      {/* Register Form */}
      <RegisterForm />
      <hr />

      {/* Routing Section */}
      <nav className="nav">
        <Link to="/" className="nav-item">Homepage</Link>
        <Link to="/about-me" className="nav-item">About me</Link>
      </nav>

      {/* Routes configuration */}
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about-me" element={<Intro1 />} />
      </Routes>
      <hr />

      {/* Displaying Images */}
      <div>
        <img height={200} src={salad} alt="An image of a salad" />
        <img
          height={200}
          src={require("./assets/images/falafel.jpg")}
          alt="An image of falafel"
        />
        <img height={200} src={randomImageUrl} alt="Random image" />
      </div>
      <hr />

      {/* Video Section */}
      <MyVideo />
      <hr />
      
      {/* Bird Sound Component */}
      <BirdSound />
    </>
  );
}

export default App;
