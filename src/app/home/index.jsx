
import Navbar from "@/Components/Navbar";

import Hero from "@/Components/Hero";
import About from "@/Components/About/About";
import Footer from "@/Components/Footer";


export default function HomeApp() {
  const backgroundImageUrl = "/blue.jpg";

  const containerStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh", // Ajusta la altura según tus necesidades
    // Otros estilos que desees aplicar al contenedor
  };
  return (
    <>
      <div style={containerStyle}>
        <Navbar />
        <br />
        <Hero />  
        <About />
        <br />
        <Footer />
      </div>
    </>
  );
}