import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function MycardPage() {
    const createData = (name: string, canplay: boolean) => {
        return { name, canplay };
    }
    const rows = [
        createData('Frozen yoghurt', true),
        createData('Frozen yoghurt', true),
        createData('Frozen yoghurt', true),
        createData('Frozen yoghurt', true),
    ];
    return (<>
        <div>
            <h1>Mycard</h1>
            <button><a href="http://localhost:3000/HomeAuth">Home</a></button>
            <button style={{ position: 'absolute', right: 0 }}><a href="http://localhost:3000">Create</a></button>
            <button><a href="http://localhost:3000">logout</a></button>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ fontWeight: 'bold', textDecoration: 'underline' }}>Flash Card</TableCell>
                            <TableCell style={{ fontWeight: 'bold', textDecoration: 'underline' }} align="right">Play</TableCell>
                            <TableCell style={{ fontWeight: 'bold', textDecoration: 'underline' }} align="right">Edit</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right"><button>Play</button></TableCell>
                                <TableCell align="right"><button>Edit</button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div >
    </>
    );
}

export default MycardPage;