# Media SSG Boilerplate

![Media SSG Boilerplate](https://user-images.githubusercontent.com/20677823/221048865-464e2d08-fd7c-4e64-a590-ba7d21b77173.png)

This repo is now deprecated.

# Moved to Skeet

![Skeet Web Template](https://storage.googleapis.com/skeet-assets/imgs/samples/skeet-web-template.png)

We made the TypeScript Full stack framework "Skeet" and now maintaining the Media SSG Templates(Skeet Web Template) codes there. We can make APIs, Workers, Apps and Web media with "Skeet"

[Skeet Web Template](https://github.com/elsoul/skeet-web-template)

[Skeet - TypeScript Serverless Framework](https://github.com/elsoul/skeet)

## Aiming to

- Fast Development
- High Performance
- Global Scale
- Maintainable Code
- Strong SEO

## Summary

- [x] [Next.js (v13) - SSG Framework](https://nextjs.org/)
- [x] [React (v18) - UI Framework](https://reactjs.org/)
- [x] [TypeScript (v4.9) - Type Check](https://www.typescriptlang.org/)
- [x] [ESLint - Linter](https://eslint.org/)
- [x] [Prettier - Formatter](https://prettier.io/)
- [x] [Husky - Pre Commit](https://typicode.github.io/husky/#/)
- [x] [Recoil - State Management](https://recoiljs.org/)
- [x] [Next i18next (v13) - i18n Translation](https://github.com/isaachinman/next-i18next)
- [x] [Firebase - Hosting & Analytics](https://firebase.google.com/)
- [x] [Tailwind - CSS Framework](https://tailwindcss.com/)

## Quick start

```bash
# Node version (using nodenv)
$ node -v
v18.14.1

# Install dependencies
$ yarn install --frozen-lockfile

# Run dev server (localhost:4200)
$ yarn dev
```

## Firebase Hosting

You need to login to Firebase to use Firebase Hosting to publish your media website.

```bash
# Install Firebase tools
$ npm i -g firebase-tools

# Login to Firebase to enable `yarn deploy` from local
$ firebase login

# Get FIREBASE_DEPLOY_TOKEN to use CI/CD
$ firebase login:ci

```

## GitHub Actions (CI/CD)

Needs to set Secrets on GitHub to work with GitHub Actions.

```
BING_API_KEY
FIREBASE_DEPLOY_TOKEN
```

Also you need the BING_API_KEY for .env to send sitemap when `yarn deploy`
