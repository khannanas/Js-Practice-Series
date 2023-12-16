// We need the mouse on complete screen not only inside the container part thus selecting window

window.addEventListener("mousemove",function(details){
    var circle= document.querySelector(".container")

    // half circle inside plus 100 points more inside thus to make it behind the mouse
    var xval=gsap.utils.mapRange(0,window.innerWidth,100 + circle.getBoundingClientRect().width/2, window.innerWidth-(100 +circle.getBoundingClientRect().width/2),details.clientX)

    gsap.to(".container",{
        left: xval+"px",
        ease: Power3
    })
})