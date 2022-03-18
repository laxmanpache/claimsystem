import React from 'react'
import { Button, Paper, Typography } from '@mui/material'
import { Box } from '@mui/material'
import { makeStyles } from '@mui/material';
import { ExpenceTable } from './ExpenceTable.jsx';
// const useStyles = makeStyles((theme) => ({
//     margin: {
//       margin: theme.spacing(1),
//     },
//     extendedIcon: {
//       marginRight: theme.spacing(1),
//     },
//   }));
const ApplyExpences = () => {
    // const classes = useStyles();
  return (
    <div>
       <Box>
       <Paper style={{padding:10}}>
           <Box>
                <h6 style={{color:'#595959'}}>Home / Apply Expenses</h6>
           </Box>
           <Box style={{display:'flex',justifyContent:'space-between'}} >
               <h3>Expenses</h3>
               {/* <Button variant="outlined" size="small" color="primary" className={classes.margin}> */}
          {/* Small
        </Button> */}
        <Button  style={{height:40,marginTop:15}}variant="contained" size="small">Apply New Expence</Button>
           </Box>
           
       </Paper>
       <ExpenceTable/>
       
       </Box>
       
    </div>
  )
}

export default ApplyExpences