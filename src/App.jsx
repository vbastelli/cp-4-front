import React, { useState } from "react";
import Footer from "./componentes/Footer";
import Header from "./componentes/Header";
import Home from "./componentes/Home";
import Sobrenos from "./componentes/Sobrenos";
import Contato from "./componentes/Contato";
import './componentes/sobrenos.css'; 
import './componentes/contato.css'; 

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
    
    <section id="home">
      <Home />
    </section>

    <section id='sobrenos'>
      <Sobrenos />

    </section>

    <section id="contato">
      <Contato />
    </section>

      <Footer />
    </>
  );
}

export default App;