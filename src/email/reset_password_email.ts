import config from '../config'
import nodemailer from 'nodemailer'

const sendResetPasswordWithMail = (
  name: string,
  email: string,
  token: string,
) => {
  const transporter = nodemailer.createTransport({
    host: config.emailHost,
    port: 25,
    secure: false,
    requireTLS: true,
    auth: {
      user: config.emailUser,
      pass: config.emailPassword,
    },
  })

  const mailOptions = {
    from: config.emailUser,
    to: email,
    subject: 'Reset your Feribd website password',
    html:
      '<h3>Dear honorable user ' +
      name +
      ',</h3><p>Please click on the following link to <a href ="http://localhost:5000/auth/reset-password/?token=' +
      token +
      '"> reset your password </a></p>',
  }

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.error('Error sending email:', error)
    } else {
      console.info('Email sent:', info.response)
    }
  })
}

export default sendResetPasswordWithMail
