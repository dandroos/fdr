![Gatsby logo](https://seeklogo.com/images/G/gatsby-logo-1A245AD37F-seeklogo.com.png)



# Gatsby Starter <!-- omit in toc --> 

This is a boilerplate to get you up and running quickly, so you can spend less time faffing and more time creating!

- [Get started!](#get-started)
- [What's included?](#whats-included)
- [Cool! Anything else?](#cool-anything-else)
- [Great! What?....more?!](#great-whatmore)
- [A note about the dev server](#a-note-about-the-dev-server)
- [When should I use this starter?](#when-should-i-use-this-starter)
## Get started!

```
git clone https://github.com/dandroos/gatsby-starter.git
```

## What's included?

It is a straightforward Gatsby install that I have cleaned up and added some starter content to.

It comes with the following NPM packages built-in...

- [Bootstrap](https://getbootstrap.com/) ([bootstrap](https://github.com/twbs/bootstrap), [reactstrap](https://github.com/reactstrap/reactstrap), [jquery](https://github.com/jquery/jquery), and [popper.js](https://github.com/FezVrasta/popper.js))
- [React Reveal](https://www.react-reveal.com/) ([react-reveal](https://github.com/rnosov/react-reveal))
- [React Spring](https://www.react-spring.io/) ([react-spring](https://github.com/react-spring/react-spring))
- [React Anchor Link Smooth Scroll](https://github.com/mauricevancooten/react-anchor-link-smooth-scroll)

It also comes with some nifty Gatsby plugins, which I have configured so that they are ready to use!  A few 'key mentions'!...

- [gatsby-remark-images](https://www.gatsbyjs.org/packages/gatsby-remark-images/)
- [gatsby-plugin-transition-link](https://www.gatsbyjs.org/packages/gatsby-plugin-transition-link/)
- [gatsby-remark-copy-linked-files](https://www.gatsbyjs.org/packages/gatsby-remark-copy-linked-files/)
- [gatsby-plugin-catch-links](https://www.gatsbyjs.org/packages/gatsby-plugin-catch-links/)

## Cool! Anything else?

Yes, my friend! I have also set up the SASS development environment as well. It imports all of Bootstrap's components separately, so you can comment out/delete the ones you don't need. Take a look at the style.scss file in the components directory. I have set up the Gatsby project to import this file (Gatsby can compile SASS with the help of their plugin - which I have installed!)

## Great! What?....more?!

Yep! I've also set up a very basic Markdown blog, which you can tweak into a news or portfolio feature. I have set it up with gatsby-image to make use of the amazing image optimisation built into Gatsby.

## A note about the dev server

Where you would normally type `gatsby develop` to start a local development environment, you should type `npm start` as I have amended the script to start a server that can be accessed by other machines on your network.

## When should I use this starter?

I would suggest using this for clients that need more than a single landing page and don't need much dynamic content.  e.g. creatives (artists, photographers, musicians, graphic designers) and small businesses.
