import React from 'react'
import { Button, Paper, Typography } from '@mui/material'
import { Box } from '@mui/material'
import { makeStyles } from '@mui/material';
import { ExpenceTable } from './ExpenceTable.jsx';
import { useState } from 'react';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  // boxShadow: 24,
  p: 4,
};

const ApplyExpences = () => {
    // const classes = useStyles();
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
        <Button  style={{height:40,marginTop:15}}variant="contained" onClick={handleOpen} size="small">Apply New Expence</Button>
           </Box>
           
       </Paper>
       <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          
        </Box>
      </Modal>
       <ExpenceTable/>
       
       </Box>
       
    </div>
  )
}

export default ApplyExpences