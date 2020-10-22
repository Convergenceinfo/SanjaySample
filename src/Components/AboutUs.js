import React from "react";
import ReactDOM from "react-dom";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

import "../assets/css/style.css";


const styles = () => ({
    
  card: {
    maxWidth: 300,
    margin: "auto",
    transition: "0.3s",
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 0.5)',
  },
  media: {
    paddingTop: "56.25%"
  },
  content: {
    textAlign: "left",
    padding: "3px"
  },
  divider: {
    margin: "3px"
  },
  heading: {
    fontWeight: "bold"
  },
  subheading: {
    lineHeight: 1.8
  },
  
});

function App() {
    const classes = styles();
  return (
    <div className="App">
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={
            "https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg"
          }
        />
        <CardContent className={classes.content}>
          <Typography
            className={"MuiTypography--heading"}
            variant={"h6"}
            gutterBottom
          >
            About US
          </Typography>
          <Typography
            className={"MuiTypography--subheading"}
            variant={"caption"}
          >
           Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.
          </Typography>
          <Divider className={classes.divider} light />
        </CardContent>
      </Card>

      
    </div>
  );
}

const WrappedApp = withStyles(styles)(App);

export default App
