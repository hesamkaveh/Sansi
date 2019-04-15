[![Build Status](https://travis-ci.org/hesamkaveh/Sansi.svg?branch=master)](https://travis-ci.org/hesamkaveh/Sansi)

# What is Sansi?
A blog template with great seo that is using gatsby for frontend and wordpress for backend. 
Gatsby ia a static aite generator and it is create a website with greate seo and great performance. 
You can see my blog as [demo](https://hesamkaveh.com/) . 

## how to data fetch? 
When you are creating a blog post, you whould rebuild your website to fetch new data. In other word data will be fetch on build time. It's is easy however you can use webhook to do it automaticly. 

## How about dynamic contents as commenting system?
Commenting system is using ajax to query data from backend. It's completely dynamic. 

# Installation
1-Install dependencies.
On Debian/Ubuntu:

`sudo apt install git nodejs`

On Arch:

`sudo pacman -S git nodejs npm`

2-Clone the repo:

`git clone git@gitlab.com:Hesamkaveh/sansi.git && cd sansi`

3-Install nodejs packages:
`sudo npm install -g gatsby-cli`

`npm install`

4- Change backend site address that using Wordpress. edit gatsby-config.
5-Run it:

`gatsby develop`

If data fetched with no error, open localhost:8000 to see website

# TODO
- [x] Fix Rss file in standard way
- [x] Load image in multiple resolutions
- [x] Add commenting system
- [x] Add Date in post detail
- [x] Fix in safari
- [x] Add sitemap
- [x] add config and translation file instead of hard code
- [ ] Add subscribe btn to commenting system
- [ ] add menu burger for mobile
- [x] Generate seo tags by seo component instead of hard code
