import express from 'express';
import { getrelaxationActivities } from '../controllers/relaxationActivitiesController.js';

const router = express.Router();

router.get('/relaxation-activities', getrelaxationActivities);

export default router;