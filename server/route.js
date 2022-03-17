import express from 'express';
import  {CreateExpences , GetAllExpences,DeleteClaim ,UpdateClaim}  from './controller/PostController.js';

const router=express.Router();

router.post('/',(req,res)=>{
    console.log("Hello")
})
router.post('/create',CreateExpences)
router.get('/create',GetAllExpences)
router.delete('/delete/:invoicenumber',DeleteClaim)
router.patch('/update/:invoicenumber',UpdateClaim)


export default router;