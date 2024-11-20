require('dotenv').config();
import express from 'express';
import cors from "cors";
import { authRouter } from './routers/authRouter';
import { getPrisma } from './utils/getPrisma';
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use('/api/v1/auth',authRouter);

app.get('/',(req,res)=>{
    res.send("API Setup")
});

(async function database(){
    try{
    await getPrisma();
    console.log("Database connected securely");
    }catch(e){
        console.log("Failed to establish connection to database", e);
    }

})()

app.listen(port,()=>{
    console.log(`Server running on Port: ${port}`)
})

