import React from "react";
import "./App.css";
import RoutesInfo from "./components/routesInfo";
import { BrowserRouter } from "react-router-dom";
import Nav from "./components/nav";

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <RoutesInfo />
      </BrowserRouter>
    </div>
  );
};

export default App;
