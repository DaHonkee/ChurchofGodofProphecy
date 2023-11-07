// Compose email
const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'dakodahh92@gmail.com',
    subject: 'Prayer Requests',
    text: 'This is a test email from Church of God'
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('Error:', error);
    } else {
        console.log('Email sent:', info.response);
    }
});
