import React, { Component } from 'react';

class HomeAuth extends Component {
    render() {
        return (
            <div>
                <h1>HomeAuth</h1>
                <button><a href="http://localhost:3000">Home</a></button>
                <button><a href="http://localhost:3000/HomeAuth">Login</a></button>
            </div>
        );
    }
}

export default HomeAuth;