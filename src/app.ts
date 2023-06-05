import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { sendWhatsappMessage } from './services/twilio';
import dotenv from 'dotenv';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

dotenv.config();

app.post('/chat/send', async (req, res) => {
  const { to, body } = req.body;
  try{
    const result = await sendWhatsappMessage(`whatsapp${to}`, body);
    console.log(result);
    res.status(200).json({ success: true, body})
  }catch(err){
    res.status(500).json({ success: false, err});
  }
})

app.listen(port, () => {
  console.log(`server is runing on port ${port}`);
})