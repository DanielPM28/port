
import React from "react";
import Image from "next/image";
const Hero = () => {
  const backgroundImageUrl = "/hero.png";

  return (
    <>
      <div className="container px-5 py-18 mx-auto">
      <Image
        src={backgroundImageUrl}
        alt="Descripción de la imagen"
        className="w-auto h-auto max-w-1200px  max-h-700px" width="1300" height="700"
      />
    </div>
    </>
  );
};

export default Hero;
