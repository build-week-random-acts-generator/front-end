import React from 'react';
import Auth from '../Auth/authentication';
import authentication from '../Auth/authentication';

export const Home = props =>
{
    return (
        <div>
        <button onClick = {
            () => {
                Auth.logout(() =>{
                    props.history.push("/");
                });
            }
        }>
            Log Out
        </button>
        </div>

    )
}