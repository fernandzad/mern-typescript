import dotenv from 'dotenv';
dotenv.config();

export default {
    MONGO_DATABASE: process.env.MONGO_DATABASE || 'videosdb',
    MONGO_USER: process.env.MONGO_USER || 'admin',
    MONGO_PASSWORD: process.env.MONGO_PASSWORD || 'admin',
    MONGO_HOST: process.env.MONGO_HOST || '0.0.0.0',
    MONGO_PORT: process.env.MONGO_PORT || '27017',
    SERVER_PORT: process.env.PORT || 3000
}