import React from 'react'
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    body: {
        height: "100%",
        backgroundColor: "black",
        fontFamily: "Montserrat-Regular, sans-serif"
    },
    
    h1,h2,h3,h4,h5,h6: {
      margin: "40px"
    },
    
    block: {
      minHeight: "100%",
      paddingTop: "56px"
    },
    
    home: {
      background: "black",
      backgroundSize: "cover"
    },

    banner, h2: {
      fontFamily: "Montserrat-Bold, sans-serif",
      fontSize: "2.5rem",
      fontWeight: "800",
      background: "#E2251D"
    },

    banner, h4: {
      fontFamily: "Montserrat-SemiBold, sans-serif",
      fontSize: "1.9rem",
      lineHeight: "1.8rem",
      color: "white",
    },
    
    a: { 
      fontFamily: "Montserrat-SemiBold, sans-serif",
      fontSize: "1.9rem",
      lineHeight:" 1.8rem",
      color: "#666",
      margin: "0px",
      transition: "all .4s",
      backgroundColor: "transparent",
      "& :hover": {
        backgroundColor: "transparent",
        color: "#ff3b30",
        transition: ".5s"
      },
      "& :focus": {
        outline: "none !important"
      }
    },
})

const classes = useStyles();

function Maintenance() {
    return (
        <div className={classes.home, classes.block}>
            <div className={`row container ${classes.banner}`}>
                <h2>We’ll be back soon!</h2>
                <h4>Sorry for the inconvenience but we&rsquo;re performing some maintenance at the moment. If you need to you can always <a className={} href="mailto:info@apploadafrica.com">contact us</a>, otherwise we&rsquo;ll be back online shortly!</h4>
                <h4>&mdash; Appload</h4>
            </div>
        </div>
    )
}

export default Maintenance
