import express from 'express';
import Logger from './Controller/Logger.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import userRoutes from './Routes/user.routes.js'; // import the userRoutes

const app = express();
const port = 4000;

app.use(cors({origin:"http://localhost:3000"}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/user", userRoutes); // use the userRoutes

app.listen(port, () => {
  Logger.info("running at 4000");
  console.log(`"listening at ${port}"`)
});

app.get('/', (req, res) => {
  res.send("ok").status(200);
});