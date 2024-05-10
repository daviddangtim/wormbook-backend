import Express from 'express'
import cors from "cors"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import connectDB from './database/dbConnection.js'
import router from "./routes/approutes.js"

//initializing the dot env method
dotenv.config();

//assigning the express method to a variable
const app = Express();

//using the express functions
app.use(cors({origin: "*"}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/api/v1', router);

//creating the start server method
const startserver = async () => {
    //calling the env file
const PORT = process.env.PORT || 7788
    try {
        app.listen(PORT,() => {console.log(`Event-App IS RUNNING ON PORT: ${PORT}`);})
        connectDB()
    } catch (error) {
     console.log(error);
    }
};

    startserver();




