import { Router } from 'express';
import * as videosController from './video.controller';
const router = Router();

router.get('/videos', videosController.getVideos);

router.get('/videos/:id', videosController.getVideo);

router.post('/videos', videosController.createVideo);

router.put('/videos/:id', videosController.updateVideo);

router.delete('/videos/:id', videosController.deleteVideo);

export default router;