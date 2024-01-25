import express from "express";
export const app = express();
import router from "../routes/pages.js";
app.set('view engine', 'ejs');
app.set('views', 'views')


app.use('/', router);

app.use('/static', express.static("./static"))


export default app;

