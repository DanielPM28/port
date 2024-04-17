
'use client';
import { useRoutes, BrowserRouter } from "react-router-dom";
import HomeApp from "./home";
import Navbar from "@/Components/Navbar";
import Myprojects from "./myprojects"


const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/home", element: <HomeApp/> },
    { path: "/myprojects", element: <Myprojects/> },
  ]);
  return routes;
};

export default function Home() {
  return (
    <BrowserRouter>
      <HomeApp/>
      <AppRoutes/>
      <Myprojects/>
      <Navbar/>
    </BrowserRouter>
  );
}
