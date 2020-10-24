import React from 'react';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,Badge} from '@material-ui/core'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import '../assets/css/style.css'
import Axios from 'axios';
import { useState, useEffect } from 'react';
import clsx from 'clsx';


const useStyles = makeStyles((theme) => ({
    tableVal: {
        width:"50%",
        marginTop : "10px",
        alignItems: 'center',
        marginLeft : "20px"
    },
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
      },
    cellStyle :   {
            backgroundColor: theme.palette.action.hover,
        },
    inActiveUser: {
      backgroundColor: "red",
      width: 40,
      height: 40,
    },
    ActiveUser: {
      backgroundColor: "green",
      width: 40,
      height: 40,
    },
    shapeCircle: {
      borderRadius: '50%',
      
    },

  }));



  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }



function Tbl() {

  
    const classes = useStyles();
    const [userDetails, setUserDetails] = useState([]);
    const red = <div className={clsx(classes.shape, classes.inActiveUser)} />;
    const green = <div className={clsx(classes.shape, classes.ActiveUser)} />;
    

    useEffect(() => {
      Axios.get('http://localhost:3049/select').then(
        (response) => {
          setUserDetails(response.data);
        }
      );
    });

  console.log(userDetails);
  return (
    <div>
        <TableContainer component={Paper}>
            <Table className={classes.tableVal}>
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.head}>Id</TableCell>
                        <TableCell className={classes.head} align="right">First Name</TableCell>
                        <TableCell className={classes.head} align="right">Last Name</TableCell>
                        <TableCell className={classes.head} align="right">Created At</TableCell>
                        <TableCell className={classes.head} align="right">Is Active</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {userDetails.map((row) => (
                    <StyledTableRow className={classes.cellStyle} key={row.name}>
                    <TableCell component="th" scope="row">
                        {row.id}
                    </TableCell>
                    <TableCell align="right">{row.FirstName}</TableCell>
                    <TableCell align="right">{row.LastName}</TableCell>
                    <TableCell align="right">{row.createdAt}</TableCell>

                  <TableCell align="right">{(row.isActive===1) ?<Badge color="primary" overlap="circle" badgeContent=" " variant="dot"></Badge>: <Badge color="secondary" overlap="circle" badgeContent=" " variant="dot"></Badge>}</TableCell>
                    </StyledTableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  );
}

export default Tbl;
