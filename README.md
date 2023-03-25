# yayu.dev (v3)

My personal porfolio website.

Live version available at ([yayu.dev](https://yayu.dev))

There's also an inestable preview version available at ([preview.yayu.dev](https://preview.yayu.dev))

> Currently using an unstable, local dev version so things like CORS and blog API may or may not work at any given time on the preview site.

# Setup

## Install

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

## Run

Dev mode:

```sh
$ npm run dev
```

Build / Prod serve:

```
$ npm run build
$ npm run start
```

You can also use bundle analyzer to detect heavy dependencies by adding `ANALYZE_BUNDLE=true` to your `.env` file
That will generate a html report in `<root>/analyze` directory.

### TODO / Ideas

#### Current

Current changes in progress (only available on preview site):

- [ ] Testing
    - [ ] Unit test
        - [ ] Utils
        - [ ] Components
        - [ ] Services
        - [ ] Pages
        - [ ] API
        - [ ] Hooks
        - [ ] State
    - [ ] E2E test
        - [ ] Home
        - [ ] Blog
        - [ ] Blog Post
        - [ ] Playground
        - [ ] About
        - [ ] 404
        - [ ] 500
        - [ ] Settings

#### TODO.

These are the things I want to add to the site in the future:

- [ ] Test coverage setup w/check
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
