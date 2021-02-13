import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function HomeAuth() {
    const createData = (name: string, calories: number, fat: number, carbs: number, protein: any) => {
        return { name, calories, fat, carbs, protein };
    }
    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];
    return (<>
        <div>
            <h1>HomeAuth</h1>
            <button><a href="http://localhost:3000">Create</a></button>
            <button><a href="http://localhost:3000">My Card</a></button>
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

export default HomeAuth;