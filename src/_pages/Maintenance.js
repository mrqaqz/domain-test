import React from 'react'
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    body: {
    },
    
    block: {
      height: "100%",
      fontFamily: "Montserrat-Regular, sans-serif",
      minHeight: "100%",
      paddingTop: "56px"
    },
    
    home: {
      backgroundSize: "cover"
    },

    text_title: {
      fontFamily: "Montserrat-Bold, sans-serif",
      fontSize: "2.5rem",
      fontWeight: "800",
      color: "#E2251D",
      margin: "40px"
    },

    text_subtitle: {
      fontFamily: "Montserrat-SemiBold, sans-serif",
      fontSize: "1.9rem",
      lineHeight: "1.8rem",
      color: "black",
      margin: "40px"
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

const Maintenance = ()  => {
    const classes = useStyles();

    return (
        <main className={classes.home}>
            <div className={classes.block}>
                <div className="row container">
                    <h2 className={classes.text_title}>We’ll be back soon!</h2>
                    <h4 className={classes.text_subtitle}>Sorry for the inconvenience but we&rsquo;re performing some maintenance at the moment. If you need to you can always <a href="mailto:info@apploadafrica.com">contact us</a>, otherwise we&rsquo;ll be back online shortly!</h4>
                    <h4 className={classes.text_subtitle}>&mdash; Appload</h4>
                </div>
            </div>
        </main>
    )
}

export default Maintenance
