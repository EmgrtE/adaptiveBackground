'use strict';

// list of backgrounds
var backgrounds = [
    {
        size: [
            '3248',
            '2160'
        ],
        src: 'https://live.staticflickr.com/471/18427943289_853a27f0f7_o.jpg',
    },
    {
        size: [
            '2048',
            '1362'
        ],
        src: 'https://live.staticflickr.com/471/18427943289_103a852e35_k.jpg',
    },
    {
        size: [
            '1600',
            '1064'
        ],
        src: 'https://live.staticflickr.com/471/18427943289_333951e02a_h.jpg',
    },
    {
        size: [
            '1024',
            '681'
        ],
        src: 'https://live.staticflickr.com/471/18427943289_83774ab12e_b.jpg',
    },
    {
        size: [
            '800',
            '532'
        ],
        src: 'https://live.staticflickr.com/471/18427943289_83774ab12e_c.jpg',
    },
    {
        size: [
            '640',
            '426'
        ],
        src: 'https://live.staticflickr.com/471/18427943289_83774ab12e_z.jpg',
    }
];

// start adaptiveBackground after load window
window.addEventListener('load', function() {
    var setBackgrounds = new adaptiveBackground();

    setBackgrounds.setData('.adaptive-background-block', backgrounds);

    setBackgrounds.init();
});