import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import { TextField } from '@material-ui/core';

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
    return (
        <CenterDiv>
            <Header>
                Learning Hub
            </Header>
            <div>
                <TextField
                    label='Enter Code'
                    color='secondary'
                    variant='outlined'>
                </TextField>
            </div>
            <ButtonStyled>ENTER</ButtonStyled>
            <Link to="/HomeAuth">Login</Link>
        </CenterDiv>
    );

}

export default Home;