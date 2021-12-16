import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './home';
import Linkedin from './linkedin';
import Callback from './callback';

const Webpages = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path = "/linkedin" element= {<Linkedin />} />
                <Route path = "/callback" element= {<Callback />} />
            </Routes>
        </Router>
    );
};
export default Webpages;