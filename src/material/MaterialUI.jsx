import React from 'react'
import { Typography,AppBar,Card,CardActions,CardContent,CardMedia,CssBaseline,Grid,Toolbar,Container } from '@mui/material'
import { PhotoCamera } from '@mui/icons-material'
 //
 import Button from '@mui/material/Button';
 import ButtonGroup from '@mui/material/ButtonGroup';
import useStyles from './styles';
 // import { createTheme, ThemeProvider } from '@mui/material/styles';  
//  import {makeStyles} from '@mui/material/styles'  //deprecated
//  import { makeStyles } from '@material-ui/styles'; //deprecated
//  import { makeStyles } from '@mui/styles'; //deprecated
//

//
const buttons = [
    <Button key="one">One</Button>,
    <Button key="two">Two</Button>,
    <Button key="three">Three</Button>,
  ];
//   

const MaterialUI = () => {
    const classes = useStyles();
  return (
    <>
      {/* <Typography>hello world</Typography> */}
      <CssBaseline/>
      <AppBar position='relative'>
        <Toolbar>
            <PhotoCamera/>
            <Typography variant='h6'>Photos</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
            <Container maxWidth="sm">
            <Typography variant='h2' align='center' color="textPrimary" gutterBottom>Photo Album</Typography>
            <Typography variant='h5' align='center' color="textSecondary" paragraph>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem accusantium, a dignissimos omnis consequatur autem?</Typography>
                <Grid container spacing={2} justifyContent="center">
                        grid
                </Grid>
                     <hr />
            <div className={classes.button}>
                    <Grid container spacing={2} justify="center">
                    <Grid item>
                    <button variant="contained" color='primary'>see photos</button>      
                    </Grid>
                    
                    <Grid item>
                    <button variant="outlined" color='secondary'>see photos</button>      
                    </Grid>
                    </Grid>
                   
             </div>
            </Container>    
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
            <Grid item>
                 <Card className={classes.card}>
                    <CardMedia className={classes.CardMedia}
                       image="https://source.unsplash.com/random"
                       title="image title"
                    />
                    <CardContent />
                 </Card>
            </Grid>
            </Grid>
        </Container>
      </main>
             <ButtonGroup color="secondary" align="center" aria-label="medium secondary button group">
                 {buttons}
             </ButtonGroup>
            
    </>
  )
}

export default MaterialUI
