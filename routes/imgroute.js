const express=require('express');
const imgupload=require('../controllers/image');

const router=express.Router();
router.route('/').post(imgupload);

module.exports=router;