// config.js

module.exports = {
  port: 3000, // The port on which the NinjaMail server will run
  dbConnectionString: 'mongodb://localhost:27017/ninjamail', // The connection string for the database used by NinjaMail
  jwtSecret: 'your_jwt_secret', // Secret key for JWT authentication
  emailService: {
    host: 'smtp.example.com', // SMTP server host
    port: 587, // SMTP server port
    secure: false, // Use TLS
    auth: {
      user: 'your_email@example.com', // SMTP server username
      pass: 'your_email_password' // SMTP server password
    }
  },
  // Other configuration options can be added here
};
