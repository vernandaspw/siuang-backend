const nodemailer = require('nodemailer');

// Konfigurasi transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

/**
 * Mengirim email menggunakan nodemailer
 * @param {Object} mailOptions - Opsi email
 * @param {string} mailOptions.to - Penerima email
 * @param {string} mailOptions.subject - Subjek email
 * @param {string} mailOptions.text - Konten teks email
 * @param {string} [mailOptions.html] - Konten HTML email (opsional)
 * @returns {Promise<void>}
 */

const mail = async ({ to, subject, text, html }) => {
  const mailOptions = {
    from: process.env.EMAIL_FROM + '<' +  process.env.EMAIL_USER + '>',
    to,
    subject,
    text,
    html,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email berhasil dikirim!');
    return 'Email berhasil dikirim';
  } catch (error) {
    console.error('Terjadi kesalahan saat mengirim email:', error);
    throw error;
  }
};

module.exports = mail;
