var playPause = anime({
    // Target the boxes
    targets: 'div.box',
    translateY: [
//        How far and for how long in milliseconds
//  One to go up and one to go down 
        { value: 200, duration: 500},
        { value: 0, duration: 800 }
    ],
    rotate:{
        value: '1turn',
        easing: 'easeInOutSine'
    },
    delay: function(el, i, l){ return i * 1000},
    autoplay:false,
    loop:true
});

document.querySelector('#boxes .play').onclick = playPause.play;

document.querySelector('#boxes .pause').onclick = playPause.pause;
