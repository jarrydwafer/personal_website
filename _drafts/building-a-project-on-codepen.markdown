---
layout: post
title:  "Building a project on CodePen"
unique-id: tutorial-5
date:   2017-4-26 13:00:00 -0800
categories: tutorials
---

Codepen.io (- add link ) is quickly becoming one of my favorite websites on the web. I have used Codepen for a long time to build out quick ideas. It is a great website for inspiration, a great resource to see how concepts work, and a great platform to share quick projects. And it just got a lot better.

Introducing Codepen projects. No longer are you limited to HTML, CSS, and Javascript, but you can now set up complete dev environments that act just like a local file system and simple web server. What does this mean? Nested folders which allows you to import multiple CSS files, link images with relative file paths, and make Ajax request from within the project itself.

And man did Codepen make it easy. If you have an existing project or git repo cloned locally, all you have to do is drag and drop the files in to the Project Editor and get working right away. In addition, Codepen Projects provides all sorts of 

starter templates help jumpstart a session past even more setup and right into the important parts.


## Markup

Here we will set up some full width, full height screens with an arrow that will trigger the transition.

``` html
<body>
  <main class="screen-container">
    <div class="screens">
      <div class="screen screen--current">
        <h2>Screen 1</h2>
      </div>
      <div class="screen">
        <h2>Screen 2</h2>
      </div>
    </div>
    <nav class="pagenav">
      <input class="arrow">Arrow >></input>
    </nav>
  </main>
</body>
```

The overlays that we will be animated will be inserted with Javascript. We will slide a fixed element over our current page. We will have to define a number of layers which to specify background colors and animations. Three layers would look like this:

``` html
<div class="screen-reveal screen-reveal--right">
  <div class="screen-reveal__layer"></div>
  <div class="screen-reveal__layer"></div>
  <div class="screen-reveal__layer"></div>
</div>    
```

## CSS

In order to create individual effects, we will have to animate each layer uniquely. We will use CSS to for the animation behavior of the layers. Let's start with our general styles for our body and we'll get into the animations.

``` CSS
html,
body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  overflow-x: hidden;
}

.screen {
  padding: 6.5em;
  background: #66c6ff;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
}

```

Next we want to set up active classes.

``` CSS
.active .screen {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  visibility: hidden;
  z-index: 1;
}

.active .screen--current {
  visibility: visible;
  position: relative;
}

.active .screen-container {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.active .screens {
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  z-index: 0;
}
```

And now we want to look at

``` CSS
.screen-reveal--right {
  top: 50%;
  left: 50;
}

.screen-reveal__layer {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #ddd;
}
```

And animation effects...

``` CSS
.anim--effect-3 .page:nth-child(2) {
  background: #F3A3D3;
}

.anim--effect-3 .revealer--animate .revealer__layer {
  animation: anim-effect-3-1 1.5s cubic-bezier(0.550, 0.055, 0.675, 0.190) forwards;
}

.anim--effect-3 .revealer--animate .revealer__layer:nth-child(2) {
  animation-name: anim-effect-3-2;
}

@keyframes anim-effect-3-1 {
  0% {
    transform: translate3d(0,0,0);
  }
  25%, 75% {
    transform: translate3d(0, -100%, 0);
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }
  100% {
    transform: translate3d(0,-200%, 0);
  }
}

@keyframes anim-effect-3-2 {
  0%, 12.5% {
    transform: translate3d(0,0,0);
  }
  37.5%, 62.5% {
    transform: translate3d(0%, -100%, 0);
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000)
  }
  87.5%, 100% {
		transform: translate3d(0, -200%, 0);
	}  
}

@keyframes anim-effect-3-3 {
	0%, 25% {
		transform: translate3d(0, 0, 0);
		animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1.000);
	}
	75%, 100% {
		transform: translate3d(0, -200%, 0);
	}
}
```

- [How to build a blog with Jekyll and GitHub Pages](https://www.smashingmagazine.com/2014/08/build-blog-jekyll-github-pages/)
- [How to set up a Jekyll theme](https://webdesign.tutsplus.com/tutorials/how-to-set-up-a-jekyll-theme--cms-26332)
