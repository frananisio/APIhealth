import express from 'express';
import { getPositiveMessages } from '../controllers/positiveMessagesController.js';

const router = express.Router();

router.get('/positive-messages', getPositiveMessages);

export default router;