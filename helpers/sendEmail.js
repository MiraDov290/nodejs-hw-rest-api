const nodemailer = require("nodemailer");

require("dotenv").config();

const { META_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "mirosya29@meta.ua",
    pass: META_PASSWORD,
  },
};

const transporter = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  const emailOptions = { ...data, from: "mirosya29@meta.ua" };

  await transporter.sendMail(emailOptions);

  return true;
};

module.exports = { sendEmail };

// const email = {
//   to: "noresponse@gmail.com",
//   from: "mirosya29@meta.ua",
//   subject: "Test email",
//   html: "<p><strong>Test email</strong> from localhost:3000</p>"
// };

// transporter.sendMail(email)
//   .then(() => console.log("Email send success"))
//   .catch(error => console.log(error.message));