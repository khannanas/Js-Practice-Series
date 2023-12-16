var rect = document.querySelector(".container")

rect.addEventListener("mousemove",function(details){
    var rect_location=rect.getBoundingClientRect();
    // console.log(rect_location);
    // console.log(details.clientX);
    // this will give us x value only inside container
    var inside_rect = details.clientX-rect_location.left
    
    // check if mouse is inside container and behind center
    if(inside_rect<rect_location.width/2){
        var redColor = gsap.utils.mapRange(0,rect_location.width/2,255,0,inside_rect)
        gsap.to(rect,{
            backgroundColor: `rgb(${redColor},0,0)`,
            ease: Power4
        })
    }
    else{
        var blueColor = gsap.utils.mapRange(rect_location.width/2,rect_location.width,0,255,inside_rect)
        gsap.to(rect,{
            backgroundColor: `rgb(0,0,${blueColor})`,
            ease: Power4
        })
    }
})

rect.addEventListener("mouseleave",function(){
   gsap.to(rect,{
    backgroundColor:`white`
   })
})