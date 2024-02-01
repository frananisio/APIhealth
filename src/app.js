import express from 'express';
import wellnessTipsRoute from './routes/wellnessTips.js';
import relaxationActivitiesRoute from './routes/relaxationActivities.js';
import positiveMessagesRoute from './routes/positiveMessages.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/api', wellnessTipsRoute);
app.use('/api', relaxationActivitiesRoute);
app.use('/api', positiveMessagesRoute);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));