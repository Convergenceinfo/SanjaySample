import React from 'react';
import {Button, fade, makeStyles, InputBase, TextField} from '@material-ui/core'
import {SearchIcon, Home, Info, Subject} from '@material-ui/icons';
import '../../assets/css/style.css'
const useStyle = makeStyles((theme, style) => ({
    image : {
    width: 500,
    height: '100%',
    marginTop : '20%',
    marginBottom : '20%',
    alignItems: 'center',
    justifyContent: 'center',
    },
    setBgHeight : {
        height: '50%',
    },

}));


const TagLine = () => {
    const classes = useStyle();
    return (
        <div className={classes.image}>
            <div >
                <p className="fontStyle">Sanjay Project</p>
                <p className="fontStyleChild">Your Security Is Our Responsibility</p>
            </div>
        </div>
    )
}

export default TagLine