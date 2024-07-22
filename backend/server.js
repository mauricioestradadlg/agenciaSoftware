const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({
  origin: 'https://www.tecnologiasestrada.website', 
  credentials: true,
}));

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Conexión exitosa entre React y Node JS');
});

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto http://localhost:5000`);
});

app.post('/contacto', (req, res) => {
  const { nombre, correo, celular, mensaje } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'Outlook365',
    auth: {
      user: process.env.CORREO,
      pass: process.env.PASS
    }
  });

  const mailOptions = {
    from: process.env.CORREO,
    to: process.env.CORREO,
    subject: 'Nuevo mensaje del formulario de contacto',
    text: `Nombre: ${nombre}\nCorreo: ${correo}\nCelular: ${celular}\nMensaje: ${mensaje}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Correo enviado: ' + info.response);
  });
});
