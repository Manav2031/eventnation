import express ,{Request,Response,Application} from 'express'
require('./model/connect')
import dotenv from 'dotenv'

dotenv.config({path:'./config.env'})
const port=5000;
const app:Application=express();

app.get('/', (req: any, res: any) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))