import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

mongoose.connect(process.env.MONGODB_URI)
const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`)})