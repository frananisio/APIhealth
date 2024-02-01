import express from 'express';
import { getwellnessTips } from '../controllers/wellnessTipsController.js';

const router = express.Router();

router.get('/wellness-tips', getwellnessTips);

export default router;