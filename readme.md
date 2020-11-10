## 4amband.com

A github pages website served over https.

Currently uses node-sass instead of regular (ruby-powered) Sass, so it can be compiled easily on Linux/Unix as well as OSX/Windows. Use the commands below to download and build the necessary modules:

```sh
git clone https://github.com/jpederson/4amband.com.git 4am
cd 4am
npm install
```

Then to adjust styles, just navigate to the directory and run the `grunt` command, which will watch and compile when you make CSS changes. And that's it!

Obviously, if you rework this to be a site for your own band/music project/etc, you'll have to update the domain (in the CNAME file) and configure your site to [use Github with an Apex domain](https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site) or just host it on your own server.

*****
Developed by [James Pederson](https://jpederson.com).