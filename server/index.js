import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';  // for mongoDB access     
import cors from 'cors'; // for making cross-version request
import dotenv from 'dotenv'; // to use env files (enviourment variable)
import helmet from 'helmet'; // use to secure http headers / safety
import morgan from 'morgan'; // mainly a middleware used for login 


dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy : "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded ({ extended: true }));
app.use(cors());

