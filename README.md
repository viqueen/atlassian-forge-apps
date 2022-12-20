# atlassian-forge-apps

- My little corner of forge apps with my own development loop ... after jumping through some hoops with the docs
- I do like my TypeScript and my Webpack for bundling apps, so I deviated from the defaults that `forge create` provides

### environment

I use **[nvm](https://github.com/nvm-sh/nvm)** to manage my node versions.

```bash
brew install nvm
```

### development setup

- clone the repo and install the dependencies

```bash
cd atlassian-forge-apps
nvm install
npm install
```

- setup git hooks

```bash
npx husky install
```

### working with forge

- you will need an email address used for your Atlassian account
- generate an API token from https://id.atlassian.com/manage-profile/security/api-tokens
- use them to login

```bash
npm run forge:login
```

### included

- [jira-project-page](./viqueen-project-page/README.md)
- [ ] jira-dashboard-gadget
