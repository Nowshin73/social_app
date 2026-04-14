import express, { Request, Response } from 'express';
import postRoutes from './modules/post/post.routes';

const app = express();
app.use(express.json());

 app.get('/',(req:Request,res:Response)=>{
            res.send("Hello World");
        })
app.use('/api/v1/post',postRoutes);

export default app;