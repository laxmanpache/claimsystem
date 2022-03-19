import React from 'react'
import { Button, Divider, Paper, Typography } from '@mui/material'
import { Box } from '@mui/material'
import { makeStyles } from '@mui/material';
import { ExpenceTable } from './ExpenceTable.jsx';
import { useState } from 'react';
import Modal from '@mui/material/Modal';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import axios from 'axios';
import { useEffect } from 'react';
import AddExpence from './AddExpence.jsx';
import ExpenceTableantd from './ExpenceTableantd'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
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
  // const [claimDetais, setclaimDetais] = useState({})
  // const [ClaimType, setClaimType] = useState('Travel')
  // const [Name, setName] = useState()
  // const [Number, setNumber] = useState()
  // const [Amount, setAmount] = useState()
  // const [date, setdate] = useState()
  // const [Remark, setRemark] = useState()
  // const [TypeOfVisit, setTypeOfVisit] = useState('Busness')

  // const StoreData = async () => {
  //   alert("Save Data");
  //   console.log(ClaimType)
  //   console.log(Name)
  //   console.log(Number)
  //   console.log(Amount)
  //   console.log(date)
  //   console.log(Remark)
  //   console.log(TypeOfVisit)
  //   setclaimDetais({
  //     claimtype: ClaimType,
  //     visittype:TypeOfVisit,
  //     name: Name,
  //     invoicenumber: parseInt(Number),
  //     date: date,
  //     amout: parseInt(Amount),
  //     remark: Remark,
  //   })



  // }

  // const ResetData = () => {
  //   alert("Reset Data")
  //   setclaimDetais('')
  //   setclaimDetais('')
  //   setClaimType('')
  //   setName('')
  //  setNumber('')
  //  setAmount('')
  // setdate('')
  //   setRemark('')
  // setTypeOfVisit('')

  // }

  // const SaveDataToDb = async () => {

  //   console.log("helo Laxman");
  //   console.log(claimDetais)
  //   try {
  //     const resp = await axios.post("http://localhost:3003/create", claimDetais);
  //     console.log(resp);
  //   }
  //   catch (e) {
  //     console.log("error occure" + e)
  //   }
  //   setclaimDetais('')
  //   setclaimDetais('')
  //   setClaimType('')
  //   setName('')
  //  setNumber('')
  //  setAmount('')
  // setdate('')
  //   setRemark('')
  // setTypeOfVisit('')
  //   handleClose();
  // }
  // const [count, setcount] = useState(0)
  // useEffect(() => {
  //   if (count === 1)
  //     SaveDataToDb();
  //   setcount(1)
  // }, [claimDetais])

  // const handelselect = (e) => {
  //   setClaimType(e.target.value);
  //   // alert(ClaimType)
  // }
  // const visitSelection = (e) => {
  //   setTypeOfVisit(e.target.value);
  //   // alert(ClaimType)
  // }

  return (
    <div>
      <Box>
        <Paper style={{ padding: 10 }}>
          <Box>
            <h6 style={{ color: '#595959' }}>Home / Apply Expenses</h6>
          </Box>
          <Box style={{ display: 'flex', justifyContent: 'space-between' }} >
            <h3>Expenses</h3>
            {/* <Button variant="outlined" size="small" color="primary" className={classes.margin}> */}
            {/* Small
        </Button> */}
            <Button style={{ height: 40, marginTop: 15 }} variant="contained" onClick={handleOpen} size="small">Apply New Expence</Button>
          </Box>

        </Paper>
      <AddExpence open={open}  handleClose={handleClose}/>
        {/* <ExpenceTable /> */}
        <ExpenceTableantd/>

      </Box>

    </div>
  )
}

export default ApplyExpences