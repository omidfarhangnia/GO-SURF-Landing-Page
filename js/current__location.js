gsap.to(".shadowOfCircle", {
    stagger: 2,
    duration: 2.5,
    ease: "power4.out",
    opacity: 0,
    attr: {
        r: 40
    },
    repeat: -1,
})


$(".world__map__svg path").on("mouseover", function(e) {
    let target = $(this);
    gsap.to(target, {
        duration: .5,
        ease: "back.out(1.7)",
        opacity: 1,
        onComplete: function() {
            gsap.set(target, {opacity: .0802455})
        }
    });
})

// fill-rule="evenodd" clip-rule="evenodd"