/*
    adaptiveBackground is a module written in Vanilla JS that adds a background to a block depending on the block size.
    License: GPLv2
    Source: https://github.com/EmgrtE/adaptiveBackground
    Author: EmgrtE
*/

'use strict';

function adaptiveBackground() {
    var that = this;

    // INNER DATA
    // declaration main inner data
    var data = false,
        image = false,
        timer = false;



    // INNER METHODS
    // get list of suitable backgrounds
    that.getSuitableBackgrounds = function(backgroundsBlock, backgroundsArr) {
        if (!backgroundsBlock) {
            return false;
        }

        // get block sizes
        var blockHeight = backgroundsBlock.offsetHeight,
            blockWidth = backgroundsBlock.offsetWidth;

        // create arrs for suitable backgrounds
        var suitableBackgroundsSizes = [],
            suitableBackgroundsSrc = [];

        // get suitable backgrounds
        for (var i = 0; i < backgroundsArr.length; i++) {
            if (backgroundsArr[i].size[0] >= blockWidth && backgroundsArr[i].size[1] >= blockHeight) {
                suitableBackgroundsSrc.push(backgroundsArr[i]);

                suitableBackgroundsSizes.push(backgroundsArr[i].size[0]);
            }
        }

        return {
            suitableBackgroundsSizes,
            suitableBackgroundsSrc
        };
    };

    // get smallest background from suitable backgrounds
    that.getSmallestBackground = function(suitableBackgroundsSizes, suitableBackgroundsSrc) {
        if (suitableBackgroundsSizes.length < 1) {
            return false;
        }

        if (suitableBackgroundsSrc.length < 1) {
            return false;
        }

        // get smallest image size
        var smallestImageSize = Math.min.apply(Math, suitableBackgroundsSizes),
            smallestImageSrc = false;

        // get smallest image src
        for (var i = 0; i < suitableBackgroundsSrc.length; i++) {
            if (parseInt(suitableBackgroundsSrc[i].size[0]) == smallestImageSize) {
                smallestImageSrc = suitableBackgroundsSrc[i].src;

                break;
            }
        }

        return smallestImageSrc;
    };

    // set suitable background to block
    that.setSuitableBackground = function(backgroundsBlock, backgroundSrc) {
        if (!backgroundsBlock) {
            return false;
        }

        if (!backgroundSrc) {
            return false;
        }

        // create image object
        if (!image) {
            image = new Image;
        }

        // set background
        image.src = backgroundSrc;

        image.onload = function(e) {
            backgroundsBlock.style.backgroundImage = 'url(' + backgroundSrc + ')';
        };
    };

    // set backgrounds to blocks
    that.setBackgrounds = function(backgroundsBlock, backgroundsArr) {
        var blocks = document.querySelectorAll(backgroundsBlock);

        for (var i = 0; i < blocks.length; i++) {
            // get suitable backgrounds
            var suitableBackgrounds = that.getSuitableBackgrounds(blocks[i], backgroundsArr);

            // get smallest background
            var smallestBackground = that.getSmallestBackground(suitableBackgrounds.suitableBackgroundsSizes,
                                                                suitableBackgrounds.suitableBackgroundsSrc);

            // set background to the block
            that.setSuitableBackground(blocks[i], smallestBackground);
        }
    };



    // GLOBAL METHODS
    // set data
    that.setData = function(backgroundsBlock, backgroundsArr, debug) {
        if (!backgroundsBlock) {
            return false;
        }

        if (!backgroundsArr) {
            return false;
        }

        data = {
            backgroundsBlock,
            backgroundsArr
        };
    };

    // reload
    that.reload = function() {
        if (!data) {
            return false;
        }

        that.setBackgrounds(data.backgroundsBlock, data.backgroundsArr);
    };

    // make changes after resize window
    that.resize = function() {
        if (!data) {
            return false;
        }

        // wait until the window is resized
        clearTimeout(timer);

        timer = setTimeout(function() {
            that.reload();
        }, 200);
    };

    // init
    that.init = function() {
        if (!data) {
            return false;
        }

        that.setBackgrounds(data.backgroundsBlock, data.backgroundsArr);

        // not for ie8
        window.addEventListener('resize', that.resize);
    };

    // destroy
    that.destroy = function() {
        if (!data) {
            return false;
        }

        var blocks = document.querySelectorAll(data.backgroundsBlock);

        for (var i = 0; i < blocks.length; i++) {
            blocks[i].style.backgroundImage = '';
        }

        // not for ie8
        window.removeEventListener('resize', that.resize);
    };
}

/*
    ___________________________
    | q w e r t y u i o p [ ] |
    |  a s d f g h j k l ; '  |
    |   z x c v b n m , . /   |
    |=========================|
*/