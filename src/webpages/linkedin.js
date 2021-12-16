import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Linkedin = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [link, setLink] = useState();
    useEffect(() => {
        const api = process.env.API_URL || 'http://localhost:3000';
        fetch(`${api}/api/linkedins/auth`)
            .then(res => res.json())
            .then(
                (data) => {
                    const link = data.message.url;
                    setIsLoaded(true);
                    setLink(link);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <React.Fragment>
                <div>
                    <h1>Linkedin App registration</h1>
                </div>

                <div>
                    <a href={ link } target="_blank" rel="noopener noreferrer">App Authorization</a>
                </div>

                <div>
                    <Link to={'/'}>Home</Link>
                </div>
                
            </React.Fragment>
        );
    }
}
export default Linkedin;