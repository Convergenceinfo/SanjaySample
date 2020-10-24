import React from 'react';
import { ListItem, List, ListItemText, ListItemAvatar,Divider,Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useState, useEffect } from 'react';
import Axios from 'axios';
const url = "http://api.weatherstack.com/current?access_key=930a9240634424034d431b7d1c4ef20e&query=15.886891,74.516625";

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 560,
      backgroundColor: theme.palette.background.paper,
    },
    div : {
        margin : '10px'
    }
  }));



const ListViewDisp = () => {
    const [weather, setWeatherDetails] = useState([]);
    const classes = useStyles();
    useEffect(() => {
        Axios.get('http://localhost:3049/select').then(
          (response) => {
            setWeatherDetails(response.data);

          }
        );
      });
      console.log("________^^^^^^^^^^^^^^^^^^^^^^^^______________")
      console.log(weather)
    return(
        <div>
             <List className={classes.root}>
            {weather.map((data) => (
                <Card className={classes.div}>
                <ListItem>
                    <ListItemText primary="First Name : " secondary={data.FirstName} />
                    <ListItemText primary="Last Name : " secondary={data.LastName} />
                    <ListItemText primary="Created At : " secondary={data.createdAt} />
                    <Divider variant="inset" component="li" />
                </ListItem>    
                </Card>             
            ))}
             </List>
        </div>  
    )
}

export default ListViewDisp;