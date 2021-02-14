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

function EnterNamePage() {
    return (
        <CenterDiv>
            <Header>
                Learning Hub
            </Header>
            <div>
                <TextField
                    label='Enter Name'
                    color='secondary'
                    variant='outlined'>
                </TextField>
            </div>
            <ButtonStyled>ENTER</ButtonStyled>
        </CenterDiv>
    );

}

export default EnterNamePage;