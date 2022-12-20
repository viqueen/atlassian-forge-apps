# viqueen-project-page

## setup

- Install dependencies

```bash
npm install
```

- Build the app:

```bash
npm run build
```

- Deploy
```
npm run forge:deploy
```

- Install the app in an Atlassian site by running:
```
npm run forge:install
```

- Develop the app by running `forge tunnel` to proxy invocations locally:
```
npm run forge:tunnel
```

### Notes
- Use the `npm run forge:deploy` command when you want to persist code changes.
- Use the `npm run forge:install` command when you want to install the app on a new site.
- Once the app is installed on a site, the site picks up the new app changes you deploy without needing to rerun the install command.

