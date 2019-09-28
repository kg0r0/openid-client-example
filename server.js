const express = require('express');
const session = require('express-session');
const { ExpressOIDC } = require('@okta/oidc-middleware');
 
const app = express();
const oidc = new ExpressOIDC({
  issuer: 'https://{yourOktaDomain}/oauth2/default',
  client_id: '{clientId}',
  client_secret: '{clientSecret}',
  appBaseUrl: 'http://localhost:3000',
  scope: 'openid profile'
});
 
app.use(session({
  secret: 'this-should-be-very-random',
  resave: true,
  saveUninitialized: false
}));
app.use(oidc.router);
 
app.get('/', (req, res) => {
  if (req.userContext) {
    res.send(`
      Hello ${req.userContext.userinfo.name}!
      <form method="POST" action="/logout">
        <button type="submit">Logout</button>
      </form>
    `);
  } else {
    res.send('Please <a href="/login">login</a>');
  }
});
 
app.get('/protected', oidc.ensureAuthenticated(), (req, res) => {
  res.send('Top Secret');
});
 
oidc.on('ready', () => {
  app.listen(3000, () => console.log('app started'));
});
 
oidc.on('error', err => {
  // An error occurred while setting up OIDC, during token revokation, or during post-logout handling
});
