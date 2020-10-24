import React from 'react'
import {Parallax, Background} from 'react-parallax'
import { makeStyles } from '@material-ui/core/styles';
import {Grid} from '@material-ui/core'
import TopMenu from './Menu/topMenu'
import CompanyTag from './Menu/CompanyTagLine'
import AboutUs from './AboutUs'
import '../assets/css/style.css'
import Service from './Services'
import TableView from './tabledisplay'
import ListViewData from './listViewDisplay'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },

    component : {
        padding : '10px',
        margin : '10px'
    },
    main: {
        background: "#FFFFFF",
        position: "relative",
        zIndex: "3",
      },
    mainRaised: {
        margin: "-60px 30px 0px",
        borderRadius: "6px",
        boxShadow:
          "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
      },
   
  }));

const Header = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div>
                <Parallax
                    blur = {10}
                    bgImage = {require('../assets/img/menubgimg.png')}
                    bgImageAlt = "Background Image"
                    strength = {300}
                    className = {classes.component}
                    
                >
                <TopMenu />
                <CompanyTag />
                </Parallax>
            </div>
            <div className={classes.main, classes.mainRaised} className="infoi">
               <AboutUs /> 
               <div>
                   <h1 style={{textAlign:"center"}}>Table And List Data Display</h1>
                   <Grid container spacing={2}>
                        <TableView />
                        <ListViewData />
                    </Grid>
               </div>
               {/* <div>
                    <Service />
                </div> */}
            </div>
        </div>
    )
}

export default Header;