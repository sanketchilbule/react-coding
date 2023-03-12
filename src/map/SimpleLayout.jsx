import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@mui/AppBar';
import Toolbar from '@mui/Toolbar';
import Typography from '@mui/Typography';
import Paper from '@mui/Paper';
import Grid from '@mui/Grid';
import Container from '@mui/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

export default function SimpleLayout() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Navbar
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>Header</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>Left Content</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>Main</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>Right Content</Paper>
          </Grid>
        </Grid>
      </Container>
      <footer>
        <Typography variant="body2" color="textSecondary" align="center">
          Footer
        </Typography>
      </footer>
    </div>
  );
}
 