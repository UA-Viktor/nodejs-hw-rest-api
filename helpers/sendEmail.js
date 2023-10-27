// const sgMail = require("@sendgrid/mail");
// require("dotenv").config();

// const { SENDGRID_API_KEY } = process.env;

// sgMail.setApiKey(SENDGRID_API_KEY);

// const sendEmail = async (data) => {
//   const email = { ...data, from: "korenkov.victor@gmail.com" };
//   await sgMail.send(email);
//   console.log(email);
//   return true;
// };

const nodemailer = require("nodemailer");
require("dotenv").config();

const { META_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465, //25, 465, 2525
  secure: true,
  auth: {
    user: "v.korenkov@meta.ua",
    pass: META_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

// const email = {
//   to: "v.korenkov@icloud.com",
//   from: "v.korenkov@meta.ua",
//   subject: "Привет - счет за коммунальный платеж",
//   html: "<p><strong>Слушай - перейди по ссылки - нужно что бы ты оплатил счет - жду до завтра </strong> from localhost:3000</p>",
// };

const transportEmail = async (data) => {
  const email = { ...data, from: "v.korenkov@meta.ua" };
  transport
    .sendMail(email)
    .then(() => console.log("Email send success"))
    .catch((error) => console.log(error.message));
};
module.exports = {
  // sendEmail,
  transportEmail,
};
