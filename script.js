let nav = document.querySelector("#main nav");
let arrow = document.querySelector("#main nav #arrow");
flag = 0;
arrow.addEventListener("click",function(){
    if(flag === 0){
        nav.style.right = "-97.5%"
    arrow.innerHTML = "<i class='ri-arrow-left-s-line'></i>"
     flag = 1
    }
    else if(flag === 1){ 
        nav.style.right = "-2%"
     arrow.innerHTML = "<i class='ri-arrow-right-s-line'></i>"
     flag = 0
    };
    
})

let btn = document.querySelector("#main button")
let cof = document.querySelector("#main h1")
enter = 1
btn.addEventListener("click",function(){
    if(enter === 2){
        btn.style.top = "-100%"
    cof.style.left = "6%"
    btn.style = "clip-path: polygon(17% 50%, 31% 32%, 30% 1%, 44% 0, 49% 30%, 83% 30%, 80% 46%, 86% 57%, 80% 74%, 34% 73%, 13% 88%, 7% 63%);"
    }
    btn.innerHTML = ""
    btn.style.backgroundColor = "white"
    
})

let body = document.querySelector("body")
let fimage = document.querySelector("#main #fimage")

body.addEventListener("mousemove",function(){
        fimage.style.left = "3%"
})

body.addEventListener("mousemove",function(){
    if(enter === 1 ){
        btn.style.left = "14%"
        enter = 2
    }
    
})

let simage = document.querySelector("#main #simage")

body.addEventListener("mousemove",function(){
        simage.style.top = "-187%"
})

let text = document.querySelector("#main #text")
body.addEventListener("mousemove",function(){
    text.style.top = "-20%"
})

let placeholder = document.querySelector("#main #placeholder")

body.addEventListener("mousemove",function(){
    placeholder.style.left = "44%"
})

let c1 = document.querySelector("#main2 #page2 #c1")
let c2 = document.querySelector("#main2 #page2 #c2")
let c3 = document.querySelector("#main2 #page2 #c3")
let main2 = document.querySelector("#main2")

main2.addEventListener("mousemove",function(){
    c1.style.top = "0"
    c2.style.bottom = "0"
    c3.style.top = "0"
    whyus.style.right = "-39%"
})

let whyus = document.querySelector("#main2 h1")


