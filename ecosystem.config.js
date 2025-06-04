module.exports = {
  apps: [{
    name: 'webdevcrow',
    script: 'npm',
    args: 'start',
    env: {
      EMAIL_HOST: 'mail.privateemail.com',
      EMAIL_PORT: '465',
      EMAIL_USER: 'contact@webdevcrow.com',
      EMAIL_PASS: 'crow',
      EMAIL_TO: 'contact@webdevcrow.com'
    }
  }]
}
