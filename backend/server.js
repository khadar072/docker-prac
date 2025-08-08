import express from 'express'
import cors from 'cors'
import 'dotenv/config'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended :false}))

app.use(cors())

const PORT =process.env.PORT ||5000

 app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });


app.get("/",(req,res)=>{
    res.send('you connect correctily')
})