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
- https://github.com/auth0/express-openid-connect
