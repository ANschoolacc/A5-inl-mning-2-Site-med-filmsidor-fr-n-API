import express from "express";
const app = express();
import router from "./routes/index.js";
app.set('view engine', 'ejs');
app.set('views', 'views')


app.use('/', router);




app.use('/static',express.static("./static"))
app.listen(5080);