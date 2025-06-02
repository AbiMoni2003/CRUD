import express, { json } from "express";
import movieRoutes from "./routes/movie.route.js";
import connectDB from "./library/db.js";
import cors from "cors";

const app = express();
const PORT = 5000;
app.use(cors({
    origin:"http://localhost:5173",
    methods:["GET","POST","PUT","DELETE"]
}))
app.use(express.json());
app.use(express.urlencoded({extended:true}))

connectDB();

app.get("/",(req,res)=>{
    res.json({msg:" Abishek!"})
})

app.use("/movies",movieRoutes);

app.listen(PORT,()=>{
    console.log(`Server is Running the Port of http://localhost:${PORT}`)
})