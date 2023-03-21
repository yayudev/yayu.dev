# yayu.dev v3

Current on-development v3 for my personal website ([yayu.dev](https://yayu.dev))

Live version available at [yayu-dev.vercel.app](https://yayu-dev.vercel.app/)

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
That will generate an html report in `<root>/analyze` directory.

# Dev progress

This is are the features that I'm planning on adding to the site pre- and post-release.

### Pre-release:

Stuff that needs to be done before release:

- [x] Netlify setup
- [x] Landing
- [x] Settings page
- [x] Projects feature
- [x] Blog feature
- [x] Projects feature
- [x] About page
- [x] i18n setup
- [x] Check i18n for typos
- [X] Fix settings tooltip growing when too much text
- [X] Replace links to .xyz to .dev and datyayu to yayudev where required.
- [X] Blog comments
- [X] Blog social share / Open graph setup
- [X] Use jotai instead of context.
- [X] Mobile design
  - [X] Home
  - [X] Side menu
  - [X] About
  - [X] Playground
  - [X] Blog
  - [X] Blog (post)
  - [X] Settings
- [X] Fix scroll on mobile
- [X] Re-host images in a dedicated s3 bucket
- [X] Add sharing buttons to blog posts
- [X] Add Vercel analytics
- [X] Disable comments via settings
- [X] Disable social share via settings
- [X] Disable tracking via settings
- [X] Disable Animations via settings
- [X] Migrate API from v2 to Next's api routes + contentful
- [X] Configure CORS and security whitelist
- [X] Fix locale not working on blog page
- [X] Fix blog post title on mobile
- [X] Fix blog post date on posts list
- [X] Add blog post date to blog post
- [X] Add code highlighting
- [X] Config dev env to consume draft posts
- [X] Setup develop branch and protect main
- [X] Move content to CMS~~~~
- [ ] Do get total posts on page request to avoid having to query all slugs
- [ ] Clean content on CMS
- [ ] Set content as public
- [ ] Change domain from netlify to vercel

### Post-release:

Good to have things that will be added eventually but not 100% required for initial release.

- [ ] Swipe gestures for mobile
- [ ] Loading skeletons / Better loading states
- [ ] Add blog post tags
- [ ] Add blog post search
- [ ] Light/dark mode
- [ ] Skill sheet 
- [ ] Resume/CV pdf download
- [ ] Testing
- [ ] Checkly Web Vitals PR check/block
- [ ] Test coverage setup w/check
- [ ] Release log
- [ ] Contributing guidelines
- [ ] Full screen experiment expansion
- [ ] v2 subdomain setup
- [ ] v2 link to v3

#### Good ideas
- [ ] Transition to NextJS 13's app directory (waiting for better i18n support)
- [ ] Refactor MarqueeScroller into a standalone component package for re-usability
- [ ] Use local mdx files(?)
- [ ] Move to astro(?)

# Contributing

Currently on pre-release so not looking for help until main features are done but feel free to reach out if you find something wrong, or you think something could be improved.

Will be adding proper contributing guidelines after initial release.

# License
 
MIT stuff. Will appreciate any mention but not required.
