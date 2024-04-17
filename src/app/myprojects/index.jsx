
import Navbar from "@/Components/Navbar";
import CardProject from "@/Components/Projects/CardProject";
import TaskManager from "@/Components/Projects/TaskManager";
import PomodoroTimer from "@/Components/Projects/PomodoroTimer";
import Datatable from "@/Components/Projects/datatable";
import Footer from "@/Components/Footer";
import React from 'react'


 const Myprojects = () =>{
    const backgroundImageUrl = "/blue.jpg";

  const containerStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh", // Ajusta la altura según tus necesidades
    // Otros estilos que desees aplicar al contenedor
  };
return(
    <>
       <div style={containerStyle}>
       <Navbar />
        <CardProject/>
        <div className="text-gray-600 body-font">
          <div className="container px-5 py-18 mx-auto ">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-100">
              Little-Projects
            </h1>
            <div className="h-1 w-20 bg-purple-500 rounded"></div>
            <br />
            <br />
            <div className="flex flex-wrap -m-4 text-center">
              <div className="lg:w-1/3 w-full mb-6 lg:mb-0">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
                  To Do List
                </h2>
                <TaskManager />
              </div>
              <div className="lg:w-1/3 w-full mb-6 lg:mb-0">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
                  Pomodoro Timer
                </h2>
                <PomodoroTimer workDuration={25 * 60} breakDuration={5 * 60} />
              </div>
              <div className="lg:w-1/3 w-full mb-6 lg:mb-0">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
                  Skills
                </h2>
                <Datatable />
              </div>
            </div>
          </div>
        </div>
        <Footer />
       </div>
    
    </>
)

}

export default Myprojects
