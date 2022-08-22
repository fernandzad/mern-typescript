import config from './config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import videosRoutes from './routes/video.routes';
const app = express();

app.set('port', config.SERVER_PORT);

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use(videosRoutes);

export default app;