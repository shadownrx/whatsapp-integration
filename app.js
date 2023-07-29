const TWILIO_ID = 'ACcec928b3d8f2430d57e4c2b80121a653'
const TWILIO_SK = '31817a815c1bc4b160c2cb123e1c417b'


const client = require('twilio')(TWILIO_ID, TWILIO_SK);

client.messages
    .create({
        from: 'whatsapp:+14155238886',
        body: 'hola, bienvenido',
        to: 'whatsapp:+5493816320685'
    })
    .then(message => console.log(message.sid));