import React from 'react';
import './Result.css'

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const Result = props => {

    const {date, city, sunrise, sunset, temp, pressure, wind, err} = props.weather
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString()
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString()

    const useStyles = makeStyles({
        table: 
        {
            minWidth: 20,
        },
    });
      
    function createData(name, data,) {
        return { name, data,};
    }
      
    const rows = [
        createData('Dane dnia i godziny:', date,),
        createData('Aktualna temperatura:', temp,),
        createData('Wschód słońca:', sunriseTime,),
        createData('Zachód słońca:', sunsetTime,),
        createData('Siła wiatru (m/s)', wind,),
        createData('Ciśnienie (hPa)', pressure,),
    ];

    const classes = useStyles();

    let content = null;

    if(!err && city) {
        content = (
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.data}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer> 
        )
    }

    return (
    <div className="result">
        {err ? `Nie mamy w bazie ${city}`: content}
    </div>
    )
}

export default Result;