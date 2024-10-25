import express from "express";
import colors from "colors";
import dotenv from 'dotenv'
import connectDB from "./config/db.js";
import morgan from 'morgan';
import categoryRoutes from './routes/categoryRoutes.js'
import productRoutes from './routes/productRoutes.js'
import cors from 'cors';
import path from 'path';
import {fileURLToPath} from 'url';
//rest object
const app = express();


//esmodule fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//configure env
dotenv.config();

//database config
connectDB();

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname,'./client/build')))


//routes
app.use('/api/v1/category',categoryRoutes);
app.use('/api/v1/product',productRoutes);




//rest api
app.use('*', function(req,res){
    res.sendFile(path.join(__dirname,'./client/build/index.html'))
})

const PORT = process.env.PORT || 8000;

//run listen
app.listen(PORT,()=>{
    console.log(`Server is running on mode ${process.env.dev} on port ${PORT}`.bgCyan.white)
})