
import express from 'express';
import cors from 'cors'
import { taskRouter } from './routes/TaskRouter';

const app = express();

app.use(cors());
app.use(express.json());
app.use(taskRouter);


app.listen(3333, ()=>{
    console.log("HTTP server is running!");
})