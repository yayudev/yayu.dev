# yayu.dev (v3)

My personal porfolio website.

Live version available at ([yayu.dev](https://yayu.dev))

There's also a preview version with latest develop changes available at ([preview.yayu.dev](https://preview.yayu.dev))

## Setup

### Install

To set up just run:

```sh
$ npm install
$ cp .env.local.example .env.local
```

Then fill in the required environment variables in `.env.local`:

```sh
CONTENTFUL_SPACE_ID=<space_id>
CONTENTFUL_ACCESS_TOKEN=<access_token>
```

In order for the blog to work, you will need to create a Contentful space and get the space id and access token from there.

A blogPost content type is required for the blog to work with the following fields:

- title (short text)
- slug (short text)
- date (date)
- coverImage (asset)
- excerpt (short text)
- markdown (long text)

Optionally, you can also add a `CONTENTFUL_PREVIEW_ACCESS_TOKEN` to your `.env` file to consume draft posts.

### Run

Dev mode:

```sh
$ npm run dev
```

Build / Prod serve:

```sh
$ npm run build
$ npm run start
```

You can also use bundle analyzer to detect heavy dependencies by adding `ANALYZE_BUNDLE=true` to your `.env` file
That will generate a html report in `<root>/analyze` directory.

### Testing

#### Unit tests

Unit tests are written using jest. You can run them with:

```sh
$ npm run test:unit
#or
$ npm run test:unit:watch
```

#### E2E tests

E2E tests are written using playwright. You can run them with:

```sh
$ npm run test:e2e
# or
$ npm run test:e2e:watch
```

By default, the tests will run against the preview version of the site (`https://preview.yayu.dev`). 
You can change this by setting the `E2E_BASE_URL` environment variable manually to 
`http://localhost:3000` or `https://yayu.dev` (or any other url you want to test against).

--- 
Additionally, you can also run both unit and e2e tests with:



### Other useful commands

#### Run e2e tests against local dev server

```sh
$ npm run test:e2e:dev
```

#### Run both unit and e2e tests

```sh
$ npm run test
```

#### Linting

```sh
$ npm run lint
```

#### Format

```sh
$ npm run format
```


### Roadmap

These are the things I want to add to the site in the future:

- [ ] Loading skeletons / Better loading states
- [ ] Swipe gestures for mobile
- [ ] Light/dark mode
- [ ] Checkly Web Vitals PR check/block
- [ ] Add blog post tags
- [ ] Add blog post search (FULL FEATURE)
- [ ] Store experiment data on CMS
- [ ] Store skill data on CMS
- [ ] Store resume/CV data on CMS
- [ ] Skill sheet data visualization (FULL FEATURE)
- [ ] Resume/CV pdf download
- [ ] Secondary theme (FULL FEATURE)
- [ ] v2 subdomain setup
- [ ] v2 link to v3 (FULL FEATURE / LEGACY SUPPORT)

#### Good ideas

These are some ideas I have for the site that I might or might not implement in the future:

- [ ] Transition to NextJS 13's app directory (waiting for better i18n support)
- [ ] Refactor MarqueeScroller into a standalone component package for re-usability
- [ ] Use local mdx files(?)
- [ ] Move to astro(?)

# Contributing

PRs are welcome, but please open an issue first to discuss the changes you want to make.

# License

MIT stuff. Will appreciate any mention but not required.
