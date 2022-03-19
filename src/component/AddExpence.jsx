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

const AddExpence = ({ open, handleClose }) => {

  // const [openc, setOpenc] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  const [claimDetais, setclaimDetais] = useState({})
  const [ClaimType, setClaimType] = useState('Travel')
  const [Name, setName] = useState()
  const [Number, setNumber] = useState()
  const [Amount, setAmount] = useState()
  const [date, setdate] = useState()
  const [Remark, setRemark] = useState()
  const [TypeOfVisit, setTypeOfVisit] = useState('Busness')

  const StoreData =  () => {
    // alert("Save Data");
    // console.log(ClaimType)
    // console.log(Name)
    // console.log(Number)
    // console.log(Amount)
    // console.log(date)
    // console.log(Remark)
    // console.log(TypeOfVisit)
    setclaimDetais({
      claimtype: ClaimType,
      visittype: TypeOfVisit,
      name: Name,
      invoicenumber: parseInt(Number),
      date: date,
      amout: parseInt(Amount),
      remark: Remark,
    })



  }

  const ResetData = () => {
    alert("Reset Data")
    setClaimType('')
    setName('')
    setNumber('')
    setAmount('')
    setdate('')
    setRemark('')
    setTypeOfVisit('')

  }

  
  const [count, setcount] = useState(0)
  useEffect(() => {
    if (count === 1) {
      const SaveDataToDb = async () => {

        // console.log("helo Laxman");
        // console.log(claimDetais)
        try {
          const resp = await axios.post("http://localhost:3003/create", claimDetais);
          // console.log(resp);
        }
        catch (e) {
          console.log("error occure" + e)
        }
        handleClose();
      }
      SaveDataToDb()
    }

    setcount(1)
  }, [claimDetais])

  const handelselect = (e) => {
    setClaimType(e.target.value);
    // alert(ClaimType)
  }
  const visitSelection = (e) => {
    setTypeOfVisit(e.target.value);
    // alert(ClaimType)
  }

  return (
    <div>


      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} style={{ padding: 4 }}>

          <Box style={{ display: 'flex', justifyContent: 'space-between', margin: 0 }}>
            <Box> Add Expense Details</Box>
            <CloseOutlinedIcon onClick={handleClose} />
          </Box>
          <hr />
          <Box>
            <form>

              <Box style={{ marginBottom: 20 }}>
                <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 }}>
                  <Box>
                    <label for="cars">Claim Type</label>
                    <br />
                    <select name="cars" id="cars" value={ClaimType.value} onChange={handelselect} style={{ padding: 4, width: 150 }}>
                      <option value="Travel">Travel</option>
                      <option value="Food">Food</option>
                      <option value="Mobile">Mobile</option>
                      <option value="Other">Other</option>
                    </select>
                  </Box>
                  <Box>
                    <label for="cars">Type of Visit</label>
                    <br />
                    <select name="cars" id="cars" value={TypeOfVisit.value} onChange={visitSelection} style={{ padding: 4, width: 150 }}>
                      <option value="Busness">Busness</option>
                      <option value="industial">industial</option>
                      <option value="Finatial">Finatial</option>
                      <option value="Other">Other</option>
                    </select>
                  </Box>
                  <Box>
                    <label >Client</label>
                    <br />
                    <input style={{ padding: 4, width: 150 }} value={Name} onChange={(e) => { setName(e.target.value); }} type="text" placeholder='Client Name' />
                  </Box>
                </Box>
                {/* <br/> */}
                <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                  <Box>
                    <label >Invoice Number</label>
                    <br />
                    <input style={{ padding: 4, width: 150 }} value={Number} onChange={(e) => { setNumber(e.target.value); }} type="number" placeholder='Invoice Number' />
                  </Box>
                  <Box>
                    <label >Invoice Date</label>
                    <br />
                    <input style={{ padding: 4, width: 150 }} value={date} onChange={(e) => { setdate(e.target.value); }} type="date" placeholder='Form Date' />
                  </Box>
                  <Box>
                    <label >Amount</label>
                    <br />
                    <input style={{ padding: 4, width: 150 }} type="text" value={Amount} onChange={(e) => { setAmount(e.target.value); }} placeholder='Medium input' />
                  </Box>
                </Box>
                <Box style={{ display: 'flex', flexDirection: 'column', marginLeft: 25, marginRight: 25 }}>

                  <label for="remark">Remark</label>
                  <textarea id="remark" value={Remark} onChange={(e) => { setRemark(e.target.value); }} name="remark" rows="2" cols="2">

                  </textarea>

                </Box>
              </Box>
              <hr />
              <Box style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button variant="outlined" size="small" style={{ marginRight: 5 }} onClick={() => ResetData()}>Reset</Button>
                <Button variant="contained" size="small" onClick={() => StoreData()}>Save</Button>
              </Box>

            </form>

          </Box>



        </Box>
      </Modal>
    </div>
  )
}

export default AddExpence