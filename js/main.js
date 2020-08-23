var options = {
    damping: 0.2,
    alwaysShowTracks: true,
};

var Scrollbar = window.Scrollbar;
Scrollbar.init(document.querySelector("#my-scrollbar"), options);

new Splide('.splide').mount();