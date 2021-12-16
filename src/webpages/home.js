import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
    return(
        <React.Fragment>
            <div>
                <h1>Custom Ghost configuration</h1>
            </div>
            <div>
                <Link to={'linkedin'}>Linkedin</Link>
            </div>
        </React.Fragment>
    );
}
export default Home;