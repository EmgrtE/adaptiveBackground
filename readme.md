# About

**adaptiveBackground** is a module written in Vanilla JS that adds a background to a block depending on the block size.

## Example to use

```
var backgrounds = [
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
            '640',
            '426'
        ],
        src: 'https://live.staticflickr.com/471/18427943289_83774ab12e_z.jpg',
    }
];

window.onload = function() {
    var setBackgrounds = new adaptiveBackground();

    setBackgrounds.setData('.selector-of-block', backgrounds);

    setBackgrounds.init();
};
```

Where **size** in backgrounds array is:
```
...
    size: [
        'width_of_image', // in pixels
        'height_of_image' // in pixels
    ],
...
```

## License

GNU GPL v2.0