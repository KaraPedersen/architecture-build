import express from 'express';
import notFoundMiddleware from './middleware/not-found.js';
import errorMiddleware from './middleware/error.js';
import profilesController from './controllers/profiles.js';

const app = express();

app.use(express.static('public'));
app.use(express.json());

app.use('/api/v1/profiles', profilesController);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
