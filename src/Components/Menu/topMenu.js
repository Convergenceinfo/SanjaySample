import React from 'react';
import {Button, fade, makeStyles, InputBase, TextField} from '@material-ui/core'
import {SearchIcon, Home, Info, Subject} from '@material-ui/icons';
const useStyle = makeStyles((theme, style) => ({
    button : {
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 0.5)',
        color: 'black',
        height: 48,
        padding: '0 30px',
        float : 'right'
    },

    btn1 : {
        fontFamily:'sans-serif',
        padding: '0 20px',
        alignItems:'center',
        marginTop : '10px',
        float : 'right'
    },

    companyName : {
        fontFamily:'sans-serif',
        padding: '0 20px',
        alignItems:'center',
        marginTop : '10px',
        fontSize : '15px'
    }

}));


const TopMenu = () => {
    const classes = useStyle();
    return (
        <div>
            <Button className = {classes.button} color="primary" >Login </Button>
            <Button color = "inherit" className={classes.btn1}>
            <Subject/> Services</Button>
            <Button color = "inherit" className={classes.btn1}>
                <Info />About</Button>
            <Button color = "inherit" className={classes.btn1}>
                <Home /><i> Home </i>
            </Button>
            <Button color = "inherit" className={classes.companyName}>Sanjay Project</Button>

            
        </div>
    )
}

export default TopMenu