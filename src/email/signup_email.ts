import config from '../config'
import nodemailer from 'nodemailer'

const sendSignUpCode = (name: string, email: string, code: number | null) => {
  const transporter = nodemailer.createTransport({
    host: config.emailHost,
    port: 587,
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
    subject: 'Shikhon Website Signup Validation!',
    html: `
            <div style="width: 50%; margin: 0 auto; text-align: center; font-family: Arial, sans-serif; color: #333;">
                <h2 style="color: #007bff;">Welcome to Shikhon, ${name}!</h2>
                <p style="font-size: 15px">Thank you for signing up on our platform. We're excited to have you on board! To complete your registration, please enter the verification code below:</p>
                <h1 style="font-size: 2rem; background-color: #007bff; color: #fff; padding: 15px; border-radius: 5px;">${code}</h1>
                <p style="margin: 20px 0;">Need help? Feel free to <a href="mailto:support@shikhon.com" style="color: #007bff; text-decoration: none;">contact us</a>.</p>
                <hr style="margin: 30px 0; border: none; height: 1px; background-color: #ccc;">
                <p>Follow us on:</p>
                <div>
                    <a href="https://facebook.com/shikhon" style="margin: 0 10px; text-decoration: none; color: #007bff;">Facebook</a> |
                    <a href="https://instagram.com/shikhon" style="margin: 0 10px; text-decoration: none; color: #007bff;">Instagram</a>
                </div>
                <hr style="margin: 30px 0; border: none; height: 1px; background-color: #ccc;">
                <footer style="margin-top: 30px; font-size: 0.9rem; color: #666;">
                    <p>© 2024 Shikhon. All rights reserved.</p>
                    <p>If you did not request this code, please ignore this email.</p>
                </footer>
            </div>`,
  }

  transporter.sendMail(
    mailOptions,
    function (error: any, info: { response: any }) {
      if (error) {
        console.error('Error sending email:', error)
      } else {
        console.info('Email sent:', info.response)
      }
    },
  )
}

export default sendSignUpCode
