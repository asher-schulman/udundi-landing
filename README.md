# Udundi Landing Pg

**Description::** 2nd Round coding interview for Udundi Junior Frontend Dev position. Asked to copy a landing page and add animations. Extra points for Vue and SCSS, but since I have only worked with React, I decided to try my hand at using Vue and styling with css since I was more comfortable that way. 

I ended up creating a Vue CLI project, but had a lot of difficulties using z-index for the background. I decided to create a single image of the background with the red side bar to get the app up and running.

My initial build was using bootstrap's and Vue3's CDN in my index.html page and linking to a single js and css file. This ended up being easy, with the caveat that each larger <div> wrapper in my html file would ideally be it's own Vue component I am then composing with. I included that repo in a dir labeled 'old-cdn'

**live link(s)::** https://asher-schulman.github.io/udundi-landing/

**github repo link(s)::** https://github.com/asher-schulman/udundi-landing
## MVP
- [x] static full size landing page
- [x] animate (fade-in) "Explore" title on initial pg load
- [x] animate (slide left/right) "Explore" title & "more details" text during transition
- [x] animate (expand) Plus icon  into larger text box 
- [ ] consider mobile responsiveness
- [x] upload code to GitHub
- [x] deploy live site on either GitHub Pages or Vercel

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
