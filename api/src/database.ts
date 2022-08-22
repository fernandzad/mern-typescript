import mongoose from 'mongoose';
import config from './config';

(async () => {
    try {
        const db = await mongoose.connect(`mongodb://${config.MONGO_HOST}:${config.MONGO_PORT}/${config.MONGO_DATABASE}`);
        console.log(`Database '${db.connection.name}' is connected.`);
    } catch(error) {
        console.error('There was an error connecting to DB: ', error);
    }
})();

