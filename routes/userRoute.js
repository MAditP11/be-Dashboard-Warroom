import express from 'express';
import { Login, Logout, Register, getSales, getRekap, getRekap2, getRekap3, getRea21, getRea20, getRea19, getAdmin, getSalesById, createSales, updateSales, deleteSales } from '../controllers/userController.js';
import { verifyToken } from '../middleware/verifyToken.js';
import { refreshToken } from '../controllers/refreshToken.js';
const router = express.Router();

router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);
router.post('/admin', Register);
router.get('/sales', getSales);
router.get('/admin', verifyToken, getAdmin);
router.get('/tot_sales', getRekap);
router.get('/tot_sales2', getRekap2);
router.get('/tot_sales3', getRekap3);
router.get('/rea', getRea21);
router.get('/rea20', getRea20);
router.get('/rea19', getRea19);
router.get('/sales/:id', getSalesById);
router.post('/sales', createSales);
router.patch('/sales/:id', updateSales);
router.delete('/sales/:id', deleteSales);

export default router;
