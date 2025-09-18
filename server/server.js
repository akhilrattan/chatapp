import express from 'express';
import "dotenv/config";
import cors from 'cors';
import http from 'http';
import { connectDB } from './db.js';

const app = express();
const server = http.createServer(app);

app.use(express.json({limit:"4mb"}))
app.use(cors());

app.use('/api/status', (req,res) => res.send("API is running..."));

await connectDB();

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 