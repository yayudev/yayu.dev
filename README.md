# yayu.dev v3

Current on-development v3 for my personal website ([yayu.dev](https://yayu.dev))

Live version available at [preview.yayu.dev](https://preview.yayu.dev/)

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
- [ ] Config dev env to consume draft posts
- [ ] Move content to CMS
- [ ] Redirect v2 to v3

### Post-release:

Good to have things that will be added eventually but not 100% required for initial release.

- [ ] Swipe gestures for mobile
- [ ] Loading skeletons / Better loading states
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

MIT stuff. Will appreciate any mention but
