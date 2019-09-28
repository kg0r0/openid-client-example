# openid-client-example
# usage
Edit parameters referring to okta dashboard.
```
const oidc = new ExpressOIDC({
  issuer: 'https://{yourOktaDomain}/oauth2/default',
  client_id: '{clientId}',
  client_secret: '{clientSecret}',
  appBaseUrl: 'http://localhost:3000',
  scope: 'openid profile'
});
```

# references
https://developer.okta.com/quickstart/#/okta-sign-in-page/nodejs/express  
https://www.npmjs.com/package/@okta/oidc-middleware
