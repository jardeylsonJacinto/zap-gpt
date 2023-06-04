import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 3333;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req,res) => {
  res.send("ok");
})

app.listen(port, () => {
  console.log(`server is runing on port ${port}`);
})