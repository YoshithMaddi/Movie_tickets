import express from 'express';
import cors from 'cors';
import 'dotnet/config';

const app = express();
const port=3000;

//middleware
app.use(express.json())
app.use(cors())

//api routes
app.get('/',(req,res)=> res.send('Server is Live!'))

app.listen(port,()=> console.log(`Server listening at https://localhost: ${port}`));