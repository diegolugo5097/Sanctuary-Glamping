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
      subject: "Nuevo mensaje ✔", // Subject line
      html: `
      <strong>Hola mi nombre es:</strong> ${req.body.name},
      <br>
      <br>
      <strong>Mensaje:</strong>
      <br>
      <br>
      ${req.body.message}
      <br>
      <br>
      <strong>Correo:</strong>
      ${req.body.email}
      <strong>Telefono:</strong>
      ${req.body.phone}
      `, // html body
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
      } else {
        res.json("enviado");
      }
    });
  }

  main().catch(console.error);
};
