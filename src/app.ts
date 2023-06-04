import express from 'express';

const app = express();
const port = 3333;

app.use(express.json());

app.get('/', (req,res) => {
  res.send("ok");
})

app.listen(port, () => {
  console.log(`server is runing on port ${port}`);
})