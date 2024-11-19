import express from 'express';
import cors from "cors";
import { authRouter } from './routers/authRouter';
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use('/api/v1/auth',authRouter);

app.get('/',(req,res)=>{
    res.send("API Setup")
})

app.listen(port,()=>{
    console.log(`Server running on Port: ${port}`)
})

