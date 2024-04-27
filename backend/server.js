import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.log(error);
});

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    // connectToMongoDB();
    console.log(`Server is running on port ${PORT}`)
})