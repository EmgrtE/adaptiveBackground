'use strict';

// set height to block after load window
window.addEventListener('load', function() {
    var mainBlock = document.querySelector('.adaptive-background-block');

    mainBlock.style.minHeight = window.innerHeight + 'px';

    window.addEventListener('resize', function() {
        mainBlock.style.minHeight = window.innerHeight + 'px';
    });
});