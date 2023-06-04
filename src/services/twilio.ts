import twilio from "twilio";

const accountSid = ""
const authToken = ""
const whatsappPhoneNumber = ""

const client = twilio(accountSid, authToken);

export const sendWhatsappMessage = async (to: string, body: string): Promise<void> => {
  try{
    await client.messages.create({
      to,
      from: whatsappPhoneNumber,
      body
    })
  }catch(err){
    console.error(`Error creating ${to}: ${err}`);
  }
};