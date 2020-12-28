import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PhoneIcon from "@material-ui/icons/Phone";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Box from "@material-ui/core/Box";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import theme from "../theme";

const useStyles = makeStyles((theme) => {
  debugger
  return {
    root: {
      maxWidth: 500,
      alignSelf: 'center',
    },
    button: {
      backgroundColor: theme.palette.warning.main,
      "&:hover": { backgroundColor: theme.palette.warning.light }
    }
  }
});

export default function IconTabs() {
  const classes = useStyles();
  return (
    <Box component={Paper} rounded className={classes.root} display="flex" flexDirection="column" flexBasis="80%" >
      <Box flex="0">
        <Tabs
          value={0}
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
          aria-label="icon tabs example"
        >
          <Tab icon={<PhoneIcon />} aria-label="phone" />
          <Tab icon={<FavoriteIcon />} aria-label="favorite" />
        </Tabs>
      </Box>
      <Box flex="1"></Box>
      <Box flex="0" alignSelf="center">
        <Box aria-label="add" position="relative" top={theme.spacing(3)}>
          <Fab classes={{ root: classes.button }}>
            <AddIcon />
          </Fab>
        </Box>
      </Box>
    </Box>
  );
}
