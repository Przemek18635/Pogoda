import React from 'react';
import './Result.css'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const Result2 = props => {

  const {city2, temp2, city3, temp3, city4, temp4} = props.weather

  const useStyles = makeStyles({
    table: {
      minWidth: 20,
    },
  });
      
  function createData(name, temps) {
    return { name, temps };
  }
      
  const rows = [
    createData(city2, temp2,),
    createData(city3, temp3,),
    createData(city4, temp4,),
  ];

  const classes = useStyles();
    
  return (
    <div className="result2">  
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Miasto</TableCell>
            <TableCell align="right">Temperatura (&#176;C)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
          <TableRow key={row.name}>
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="right">{row.temps}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> 
    </div>
  )
}
   
export default Result2;