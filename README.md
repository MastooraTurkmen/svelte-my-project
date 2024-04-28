# Svelte Project

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

## Getting started with _npm_

```
npm create svelte@latest my-app
cd my-app
npm install
npm run dev -- --open

```

## Getting started with _pnpm_

```
pnpm create svelte my-app
cd my-app
pnpm install
pnpm run dev -- --open

```

## Install

```
# npm i svelte
# pnpm i svelte

```

Quick start:

```
$ yarn # npm install
$ yarn build # npm run build
```

## Development

Run Webpack in watch mode to continually compile the JavaScript as you work:

```
$ yarn watch # npm run watch
```

# About My Project

> To start the app, write your name blank :)
> Select one option to show the next result =)

![Screenshot](./screenshots/Screenshot.png)

![Screenshot](./screenshots/Screenshot-1.png)

## Positive Answers

> If you click positive answers, you can see the following results emojis reaction 🙂, 😀, 😄, 😊, 😘:

![Screenshot](./screenshots/Screenshot-2.png)

![Screenshot](./screenshots/Screenshot-3.png)

![Screenshot](./screenshots/Screenshot-4.png)

![Screenshot](./screenshots/Screenshot-5.png)

![Screenshot](./screenshots/Screenshot-6.png)

## Negative Answers

> If you click negative answers, you can see the following results and emojis reaction 😐, 😕, 🙁, 😭, 😡, 🤬:

![Screenshot](./screenshots/svelte-1.png)

![Screenshot](./screenshots/svelte-2.png)

![Screenshot](./screenshots/svelte-3.png)

![Screenshot](./screenshots/svelte-4.png)

![Screenshot](./screenshots/svelte-5.png)

---

## _Tests_

```
  import { expect, test } from '@playwright/test';

  test('about page has expected h1', async ({ page }) => {
  	await page.goto('/about');
  	await expect(page.getByRole('heading', { name: 'About this app' })).toBeVisible();
  });

```
