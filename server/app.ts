import express ,{Request,Response,Application} from 'express'
require('./model/connect')
import dotenv from 'dotenv'
import eventRouter from "./routes/eventRoutes"

dotenv.config({path:'./config.env'})
const port=5000;
const app:Application=express();

app.use(express.json());
app.get('/', (req: any, res: any) => res.send('Hello World!'))
app.use('/event',eventRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))