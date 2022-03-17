import express from 'express';
import  {CreateExpences}  from './controller/PostController.js';

const router=express.Router();

router.post('/',(req,res)=>{
    console.log("Hello")
})
router.post('/create',CreateExpences)

export default router;