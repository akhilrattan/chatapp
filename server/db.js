import mongoose from "mongoose";

export const connectDB = async () => {
    try {

        mongoose.connection.on('connected', () => {
            console.log('Mongoose connected to DB Cluster');
        });
        await mongoose.connect(`${process.env.MONGODB_URL}/chatapp`);
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
};