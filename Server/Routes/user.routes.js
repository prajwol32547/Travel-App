import express from 'express';
import { validateRegister, validateLogin } from '../Middleware/validate.js';

const router = express.Router();

router.post('/register', validateRegister, (req, res) => {
});


router.post('/login',validateLogin,(req,res)=>{

});

export default router;