import express from "express";
import router  from "./routes/routes.js";
import bodyParser from "body-parser";
import db from "./db/api_db.js"
const app = express();

//.env
import dotEnv from "dotenv";
dotEnv.config();

// port Number
const PORT = process.env.PORT || 5025;

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());


app.use("/api", router);

app.listen(PORT, (error) => {
    if (!error) {
        console.log(`Server is Successfully Running http://localhost:${PORT}/api`);
    }
})
