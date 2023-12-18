import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import vinilRoute from './routes/vinils.js';

const app = express();

const PORT = 8080;

//middleware
app.use(cors()); //для того щоб можно було відправляти з різних ip, запроси до нашого серверу
app.use(express.json()); //для  того щоб express розумів що дані з фронту будуть приходити у форматі json

// routes http://localhost:3002/
app.use('/api/vinils', vinilRoute);

async function start() {
    try {
        await mongoose.connect(
                `mongodb+srv://merkushyndev13:merkushyndev13@cluster0.ll8ofmb.mongodb.net/`
            );
        app.listen(PORT, () => {
            console.log(`server started on: http://localhost:${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
}
start();