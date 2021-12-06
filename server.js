const express = require('express');
const { auth } = require('express-openid-connect');

const app = express();

const { PORT = 3000 } = process.env;

app.use(
  auth({
    authorizationParams: {
      response_type: 'code',
      scope: 'openid profile email',
    },
    issuerBaseURL: 'https://demo.identityserver.io',
    baseURL: 'http://localhost:3000',
    clientID: 'interactive.confidential',
    clientSecret: 'secret',
    secret: 'LONG_RANDOM_VALUE',
    idpLogout: true,
  })
);

app.get('/', (req, res) => {
  res.send(`hello ${req.oidc.user.sub}`);
}); 

app.listen(PORT, () => {
  console.log(`Example app started at http://localhost:${PORT}`);
});