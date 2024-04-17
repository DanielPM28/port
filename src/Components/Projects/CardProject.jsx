
import React from "react";
import Image from "next/image";

const CardProject = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
              My Projects
            </h1>
            <div className="h-1 w-20 bg-purple-500 rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500"></p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100  p-6 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6" width="300" height="300"
                src="/image2.png"
                alt="content"
              />
              <h3 className="tracking-widest text-purple-500 text-xs font-medium title-font">
                Proyecto terminado
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                NyN Soluciones
              </h2>
              <p className="leading-relaxed text-base">
                Pagína Web diseñada para una empresa de soluciones contables, realizada con
                PHP y Bootstrap.
              </p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6" width="300" height="300"
                src="/image3.png"
                alt="content"
              />
              <h3 className="tracking-widest text-purple-500 text-xs font-medium title-font">
                Proyecto en Desarrollo
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                App Web
              </h2>
              <p className="leading-relaxed text-base">
                Proyecto en progreso, desarrollado por medio de Laravel
                y va de la mano con Android Studio.
              </p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6" width="300" height="300"
                src="/image4.png"
                alt="content"
              />
              <h3 className="tracking-widest text-purple-500 text-xs font-medium title-font">
              Proyecto en Desarrollo
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Movil App
              </h2>
              <p className="leading-relaxed text-base">
                Proyecto en progreso, desarrollado por medio de Android Studio
                y va de la mano con Laravel.
              </p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6" width="300" height="300"
                src="/image.png"
                alt="content"
              />
              <h3 className="tracking-widest text-purple-500 text-xs font-medium title-font">
              Proyecto en Desarrollo
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Shopify Partner
              </h2>
              <p className="leading-relaxed text-base">
                Pagína web sencilla en progreso de desarrollo, por medio de Bootstrap y PHP
                ,esperando datos del cliente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardProject;
