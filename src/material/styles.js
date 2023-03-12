// import styled from '@emotion/styled' 
// import makeStyles from '@mui/styles/makeStyles'
import { makeStyles  } from "@material-ui/core";
 

const useStyles = makeStyles((theme)=>({
    container:{
        backgroundColor : theme.pallete.background.paper,
        padding:theme(8,0,6),
         
    },button:{
        marginTop:"200px"
    } 
    }))


export default useStyles