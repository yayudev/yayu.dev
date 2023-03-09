# yayu.dev v3

Current on-development v3 for my personal website ([yayu.dev](https://yayu.dev))

Live version available at [preview.yayu.dev](https://preview.yayu.dev/)

> Currently using an unstable, local dev version so things like CORS and blog API may or may not work at any given time on the preview site.

# Setup

## Install

To set up just run:

```sh
$ npm install
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
- [ ] Blog social share / Open graph setup
- [ ] Mobile design
  - [ ] Home
  - [ ] About
  - [ ] Playground
  - [ ] Blog
  - [ ] Blog (post)
  - [ ] Settings
- [ ] Re-host images in a dedicated s3 bucket
- [ ] Disable Animations via settings
- [ ] Migrate API from v2 to Next's api routes (or maybe static pre-generated assets?)
- [ ] Google Analytics
- [ ] Configure CORS and security whitelist
- [ ] Redirect v2 to v3
- [ ] Transition to NextJS 13's app directory (waiting for better i18n support)

### Post-release:

Good to have things that will be added eventually but not 100% required for initial release.

- [ ] Loading skeletons
- [ ] Resume download
- [ ] Skill sheet
- [ ] Testing
- [ ] Github actions CI testing/deploy pipeline
- [ ] lighthouse audit
- [ ] Test coverage setup
- [ ] v2 subdomain setup
- [ ] v2 link to v3
- [ ] Edge functions
- [ ] Release log
- [ ] Contributing guidelines
- [ ] Full screen experiment expansion
- [ ] Refactor MarqueeScroller into a standalone component package for re-usability

# Contributing

Currently on pre-release so not looking for help until main features are done but feel free to reach out if you find something wrong, or you think something could be improved.

Will be adding proper contributing guidelines after initial release.

# License

MIT stuff. Will appreciate any mention but
