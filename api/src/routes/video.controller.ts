import { RequestHandler } from 'express';
import Video from './Video';

export const createVideo: RequestHandler = async (req, res) => {
    const isExistingVideo = await Video.findOne({ url: req.body.url });
    if (!isExistingVideo) {
        const video = new Video(req.body);
        const savedVideo = await video.save();
        return res.json(savedVideo);
    } else {
        res.status(301).json('This URL already exists');
    }
}

export const getVideos: RequestHandler = async (req, res) => {
    try {
        const videos = await Video.find(); 
        res.json(videos);
    } catch (error) {
        res.json(error);
    }
}

export const getVideo: RequestHandler = async (req, res) => {
    try {
        const id = req.params.id;
        const video = await Video.findById(id);
        if (!video) {
            return res.status(204).json('Video Not Found');
        }
        return res.json(video);
    } catch (error) {
        res.json(error);
    }
}

export const deleteVideo: RequestHandler = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedVideo = await Video.findByIdAndDelete(id);
        if (!deleteVideo) return res.status(204).json('Video Not Found')
        return res.json(deletedVideo);
    } catch (error) {
        res.json(error);
    }
}

export const updateVideo: RequestHandler = async (req, res) => {
    try {
        const id = req.params.id;

        const updatedVideo = await Video.findByIdAndUpdate(id, { $set: req.body }, { new: true });

        if (!updateVideo) return res.status(204).json('Video Not Found');
        return res.json(updatedVideo);
    } catch (error) {
        res.json(error);
    }
}