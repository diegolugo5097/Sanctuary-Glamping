const router = require("../routes/bookingEmail");

exports.email = async (req, res) => {
  ("use strict");
  const nodemailer = require("nodemailer");

  // async..await is not allowed in global scope, must use a wrapper
  async function main() {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "nodemailerpruebas@gmail.com", // generated ethereal user
        pass: "inqhknmndtszbijr", // generated ethereal password
      },
    });

    // send mail with defined transport object
    let mailOptions = {
      from: req.body.email, // sender address
      to: "nodemailerpruebas@gmail.com", // list of receivers
      subject: "Nueva Reserva ✔", // Subject line
      html: `
        <strong>Hola mi nombre es: </strong> ${req.body.name},
        <br>
        <br>
        <strong>Telefono: </strong>
        ${req.body.phone}
        <br>
        <br>
        <strong>Tipo de documento: </strong>
        ${req.body.typeDocument}
        <br>
        <br>
        <strong>Número de documento: </strong>
        ${req.body.document}
        <br>
        <br>
        <strong>Correo Electronico: </strong>
        ${req.body.email}
        <br>
        <br>
        <strong>Fecha de la reserva: </strong>
        ${req.body.datefrom} -- ${req.body.dateto}
        <br>
        <br>
        <strong>Cantidad de personas: </strong>
        ${req.body.quantity_guest}
        `, // html body
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).end();
      }
    });
  }

  main().catch(console.error);
};
