import React, { useState, useEffect } from 'react';
import { Link , useLocation } from 'react-router-dom';

function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}

const Callback = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [authorization, setAuthorization] = useState({token: "", expirationTime: ""});
    
    let query = useQuery();

    useEffect(() => {
        const code = query.get("code")
        const api = process.env.API_URL || 'http://danfercf.info:3000';
        fetch(`${api}/api/linkedins/auth/callback?code=${code}`)
            .then(res => res.json())
            .then(
                (data) => {
                    const response = data.message.savedToken;
                    console.log(response);
                    setIsLoaded(true);
                    setAuthorization(response);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [query])
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <React.Fragment>
                <div>
                    <h1>Linkedin Token Authorization</h1>
                </div>

                <div>
                    { (authorization.token) ? 'The token was generated successfully' : 'There is no token'}
                </div>

                <div>
                    <Link to={'/'}>Home</Link>
                </div>
                
            </React.Fragment>
        );
    }
}
export default Callback;
