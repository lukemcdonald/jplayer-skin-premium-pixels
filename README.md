# jPlayer Skins

A collection of basic skins for [jPlayer](http://jplayer.org/), the jQuery HTML5 Audio / Video Library.

## Creating Skins

Add skins by creating a folder inside the ```skins/``` folder. Give this folder the name of the skin (e.g. "my-skin-name"). Inside that folder, include a CSS file with the same name (e.g. "my-skin-name.css").

### Adding Credits

Credits can be added to each demo by including a credits.html file within the skin folder. This file can contain any HTML markup needed to properly give credit where credit is do. Feel free to style the credits in you skins CSS file so that it matches the skin demo.

### Using LESS

By default, the demo contains a functions.less file that is located in the directory above your skin's folder. This file has common LESS functions/mixins that I tend to use from time to time. The skin's LESS files should be inside it's folder along side it's CSS file.

### Including a Screenshot

Currently, a screenshot is not required though it might be a good idea to include. For now, the screenshot dimensions are 400x300. Name your screenshot ```screenshot.png``` and place it in the skins folder.

### Including a Design Resources

Optionally, design resources can be included with the skin. These resources should be named the same name as the skin and in the skin's folder.

## Changing Skins

To view a different skin in the Demo (index.html), find the skin wrapper element and change the ```data-skin-name``` attribute to the name of a skin in the ```skins/``` folder. 

```<div id="skin-wrapper" data-skin-name="my-skin-name">```