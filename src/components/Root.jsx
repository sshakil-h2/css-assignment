import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";


const useStyles = makeStyles((theme) => { return {
  root: {
    background: "linear-gradient(135deg, rgb(254, 193, 193) 0%, rgb(154, 111, 201) 100%)",
    margin: -8,
    height: '100vh',
  
  }
}});

export default function IconTabs({ children }) {
  const classes = useStyles();
  return (
    <Box className={classes.root} flex="1 1 100%" display="flex" justifyContent="center" flexDirection="column">
        {children}
    </Box>
  );
}
