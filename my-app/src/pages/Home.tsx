import React, { Component } from 'react';
import { Route } from 'react-router-dom';

function Home() {

    return (
        <div>
            <h1>
                Home
            </h1>
            <button><a href="http://localhost:3000">Home</a></button>
            <button><a href="http://localhost:3000/HomeAuth">Login</a></button>
        </div>
    );

}

export default Home;