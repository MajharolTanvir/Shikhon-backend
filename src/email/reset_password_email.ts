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
    subject: 'Reset your Shikhon website password',
    html: `
    <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
        <h2 style="color: #007bff;">Password Reset Request</h2>
        <p>Dear ${name},</p>
        <p style="font-size:15px">We received a request to reset your password. To proceed with resetting your password, please click the link below:</p>
        <p>
            <a href="http://localhost:5000/api/v1/auth/reset-password/?token=${token}" 
               style="display: inline-block; margin: 10px 0; padding: 10px 20px; background-color: #007bff; color: #fff; text-decoration: none; border-radius: 5px; font-size: 1rem;">
               Reset My Password
            </a>
        </p>
        <p>If you did not request a password reset, please ignore this email or contact our support team if you have any concerns.</p>
        <p>Thank you for using our services!</p>
        <p style="margin-top: 20px; font-size: 0.9rem; color: #666;">Best regards,<br>The Quick Tour Plan Team</p>
    </div>
`,
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
