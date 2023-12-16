// Reducing the time of execution using Throttling
// Throttling Function
var container=document.querySelector(".container")

const throttleFunction = (func, delay) => {
    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    }
}


container.addEventListener("mousemove",
    throttleFunction((details) => {
        // Creating a div
        var div=document.createElement("div")
        // Add class to it
        div.classList.add("imagediv")
        // Declare the position wrt container
        div.style.left = details.clientX +"px"
        div.style.top = details.clientY +"px"
        // add it to body
        document.body.appendChild(div)

        // create img
        var img=document.createElement("img")
        // adding source
        img.setAttribute("src","https://images.unsplash.com/photo-1702223175052-b577143bf2c4?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")

        // Adding image to div
        div.appendChild(img)

        // Adding animation using gsap
        // bringing img
        gsap.to(img,{
            y:"0",
            duration:0.6,
            ease: Power2,
        })

        // sending back img
        gsap.to(img,{
            y:"100%",
            delay: 0.7,
            ease: Power2,
        })

        // clear it after some time
        setTimeout(function(){
            div.remove()
        },1500)
        
    }, 500));


