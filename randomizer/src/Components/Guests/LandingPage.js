import React from 'react';
import Auth from './authentication';

export const LandingPage = props =>
{
    return (
        <button onClick = {
            () => {
                Auth.login(() =>{
                    props.history.push("/login");
                });
            }
        }>
            Log In
        </button>
    )
}