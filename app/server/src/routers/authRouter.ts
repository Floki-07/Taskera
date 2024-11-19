import express from 'express'
const router = express.Router();

router.get('/',(req,res)=>{
    res.send(
        `Auth Router`
    )
})

export { router as authRouter };