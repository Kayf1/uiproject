function timelineOne(){
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#main",
            start: "top top",
            scrub: 1,
            pin: true,
            end: "bottom -650%"
        }
    })

    tl
    .to("#centerimg",{
        left: "50%",
        duration: 2,
        ease:Power1
    })
    .to("#circle #btm img", {
        rotate: "-180deg",
        delay:1,
        duration: 1,
        stagger: .1,
        ease: Power1
    }, "flag")
    .to("#centerimg h5",{
        opacity: -.5,
        ease:Power1
    }, "flag")
    .to("#cimg img",{
        scale: "0",
        duration: 1,
        stagger: .1,
        ease:Power1
    }, "flag")
    .to("#effect",{
        opacity: 1,
        ease:Power1
    }, "flag")
    .to("#btmnav",{
        opacity: 0,
        ease:Power1
    }, "flag")
    .to("#euppernav1",{
        opacity: 1,
        ease:Power1
    }, "flag")
    .to("#home #uppernav",{
        opacity: 0,
        ease:Power1
    }, "flag")
    .to("#home #nav",{
        color: "white",
        ease:Power1
    }, "flag")
    .to("#overlay>#round", {
        top: "50%",
        scale: "1.2",
        duration: 1,
        ease: Power1
    }, "flag")
    .to("#smcircle", {
        scale: "0.5",
        duration: 1,
        ease: Power1
    }, "flag")
    .to("#circle",{
        scale: ".1",
        ease:Power1
    }, "flag")
    .to("#overlay>h1#tp",{
        rotate: 0,
        bottom: "2%",
        delay: .5,
        ease: Power1
    }, "flag")
    .to("#overlay>h1#gallery",{
        bottom: "-50%",
        duration: 1.5,
        ease:Power1
    }, "flag")
    .to("#smcircle", {
        scale: "0",
        duration: 1,
        ease: Power1
    }, "flag2")
    .to("#circle #btm img",{
        rotate: "-180deg",
        stagger:.1,
        ease: Power1
    },"flag")
    .to("#circle", {
        scale: "0",
        duration: "-1",
        ease: Power1
    }, "flag2")
    .to("#mainimg",{
        scale: "1",
        duration: 3,
        ease:Power1
    }, "flag2")
    .to("#overlay>#round", {
        opacity: "-2",
        duration: 1,
        ease: Power1
    }, "flag2")
    .to("#circle #top img", {
        scale: "0",
        duration: 1,
        ease: Power1
    })
    .to("#redpart", {
        top: 0,
        duration: 1.2,
        ease: Power1
    },"flag2")
    .to("#redpart", {
        top: "-90%",
        duration: 2.4,
        delay: .1,
        ease: Power1
    })
}


function timelineTwo(){
    var t2 = gsap.timeline({
        scrollTrigger:{
            trigger: "#section",
            start: "top top",
            scrub: 1,
            pin: true,
            end: "bottom -650%"
        }
    })
    t2
    .to("#section .circle",{
        top: "50%",
        duration: 1,
        delay: 2,
        scale: 1.4,
        stagger: .2,
        ease: Power1
    })
    .to("#section .circle",{
        left: "50%",
        duration: 1,
        stagger: .2,
        ease: Power1
    })
    .to("#sectiontop .blue",{
        scale: "0",
        ease: Power1
    })
    .to("#sectiontop .red",{
        scale: "10",
        ease: Power1
    })
    .to("#section #nav",{
        color: "white",
        ease:Power1
    }, "sectionFlag")
    .to("#euppernav2",{
        opacity: 1,
        ease:Power1
    }, "sectionFlag")
    .to("#sectiontop .red",{
        background: "linear-gradient(to right, rgb(197,65,38),  rgb(178,216,247))",
        ease: Power1
    }, "sectionFlag")
    .to("#sectiontop h1",{
        left: "-300%",
        duration: 10,
        ease: Power1
    }, "sectionFlag")
    .to("#sectionbtm #poppy",{
        opacity: 0,
        duration: 1.5,
        delay: 1,
        ease: Power1
    }, "sectionFlag")
    .to("#sectionbtm #shades",{
        opacity: 1,
        delay: -7,
        duration: 2,
        ease: Power1
    })
    .to("#box1",{
        top: "-30%",
        ease: Power1
    }, "2flag2")
    .to("#box2",{
        top: "-30%",
        delay: .2,
        ease: Power1
    }, "2flag2")
    .to("#box3",{
        top: "-30%",
        delay: .4,
        ease: Power1
    }, "2flag2")
    .to("#box4",{
        top: "-30%",
        delay: .6,
        ease: Power1
    }, "2flag2")
    .to("#box5",{
        top: "-30%",
        delay: .8,
        ease: Power1
    }, "2flag2")
}

timelineOne();
timelineTwo()