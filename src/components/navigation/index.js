import React from "react";
import {
  BrowserRouter as Router, Link
} from "react-router-dom";

import Routes from "./routes/index";
import Footer from "../footer/index";

const Navigation = () => {
    return (
        <>
        <Router>
          <nav>
            <ul className="flex centerFlex padd10u auto bc-gray texte">
              <li className="hover">
                <Link to="/">Test technique</Link>
              </li>
              <li className="hover">
                <Link to="/sujet">Sujet</Link>
              </li>
              <li className="hover">
                <Link to="/doc">Doc</Link>
              </li>
              <li className="hover">
                <div onClick={() => window.location.href = "https://www.adrien-meynard.fr"}>Adrien Meynard</div>
              </li>
            </ul>
          </nav>   
          <Routes />
        </Router>   
        <Footer /> 
        </>
    )
}

export default Navigation