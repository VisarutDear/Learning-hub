import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import { TextField } from '@material-ui/core';
import axios from 'axios';

const Header = styled.h1`
    color : red;
    text-align : center;
`;
const CenterDiv = styled.div`
    text-align : center;
    display : flex;
    flex-flow : column;
    align-content : center;
`;

const ButtonStyled = styled.button`
    paddingtop : 8px;
`;

function Home() {

    const getData = (e: any) => {
        console.log(e.target.value);
    }
    return (
        <CenterDiv>
            <Header>
                Learning Hub
            </Header>
            <div>
                <TextField
                    label='Enter Pin'
                    color='secondary'
                    variant='outlined'
                    onChange={getData}>
                </TextField>
            </div>
            <Link to="/enterName">
                <ButtonStyled>ENTER</ButtonStyled>
            </Link>
            <Link to="/HomeAuth">Login</Link>
        </CenterDiv >
    );

}

export default Home;