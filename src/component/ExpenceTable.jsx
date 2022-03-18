
import * as React from 'react';
import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';



const columns = [
    { field: '_id', hide: true },
    { field: "claimtype", headerName: 'Claim Type', width: 200 },
    { field: "invoicenumber", headerName: 'Expence ID', width: 200 },
    { field: "name", headerName: 'Client Name', width: 300 },
    { field: "visittype", headerName: 'Type of Visit', width: 250 },
    { field: "amout", headerName: 'Amount', width: 200 },
    { field: "", headerName: 'Action',
     align:'center',
        renderCell: (cellValues) => {
            //   console.log(cellValues.row.invoicenumber)
                return (
                  <div>
                       <NoteAltOutlinedIcon onClick={()=>alert("hello")}style={{color:'black'}}/>
                       <DeleteOutlinedIcon onClick={()=>{DeleteRowdata(cellValues.row.invoicenumber)}} style={{color:'red'}}/>
                  </div>
                );
        },
    width: 200 },
]



const DeleteRowdata=async(invoicenumber)=>{
          alert(invoicenumber)
          try{
          const resp= await axios.delete(`http://localhost:3003/delete/${invoicenumber}`)
          console.log(resp)
          }
          catch(e){
              console.Console('Error occure'+e)
          }
}

export const ExpenceTable = () => {

    
    const Featchdata = async () => {
        // alert("hello")
        const { data } = await axios.get("http://localhost:3003/create")
        // alert("hello")
        console.log(data)
        setTableData(data)
    }
    const [TableData, setTableData] = useState([])
    useEffect(() => {
        Featchdata();
    }, [])

    return (
        <>
           
                <div style={{ height: 400, width: "100%" }}>
                    <DataGrid
                        rows={TableData}
                        columns={columns}
                        getRowId={(row) => row._id}
                        pageSize={10}
                    />

                </div>
           

        </>
    );
}
