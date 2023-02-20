const burgerIcon=document.querySelector(".burger-icon")
const next=document.getElementById("next")
const prev=document.getElementById("prev")
const fullScreennext=document.getElementById("fullscreennext")
const fullScreenprev=document.getElementById("fullscreenprev")
const fullScreenClose=document.getElementById("fullscreenclose")
const overLay=document.querySelector(".overlay")
let count=0;
next.addEventListener("click",function(){
    let slider=document.querySelectorAll(`.product .slider .full-image img`)
    slide(1,slider)
})
prev.addEventListener("click",function(){
    let slider=document.querySelectorAll(`.product .slider .full-image img`)
    slide(-1,slider)
})
fullScreennext.addEventListener("click",function(){
    let slider=document.querySelectorAll(`.product .slider-fullscreen .full-image img`)
    slide(1,slider)
})
fullScreenprev.addEventListener("click",function(){
    let slider=document.querySelectorAll(`.product .slider-fullscreen .full-image img`)
    slide(-1,slider)
})
overLay.addEventListener("click",function(e){
    
    overLay.style.display=document.querySelector(".burger-menu").style.display="none"
    document.querySelector(".slider-fullscreen").classList.remove("fullscreen")

})
fullScreenClose.addEventListener("click",function(e){
    
    overLay.style.display="none"
    document.querySelector(".slider-fullscreen").classList.remove("fullscreen")

})
function getPageHeight(){
    var B = document.body,
    H = document.documentElement,
    height

if (typeof document.height !== 'undefined') {
    return height = document.height // For webkit browsers
} else {
    return height = Math.max( B.scrollHeight, B.offsetHeight,H.clientHeight, H.scrollHeight, H.offsetHeight );
}
}

document.querySelectorAll(`.product .full-image img`).forEach(el=>el.style.display="none");
document.querySelector(`.product .slider .full-image img`).style.display="block";
document.querySelector(`.product .slider-fullscreen .full-image img`).style.display="block";

document.querySelectorAll(".product .slider .thumbnails img").forEach(el=>{
    el.addEventListener("click",function(e){
        document.querySelectorAll(`.product .slider .full-image img`).forEach(el=>el.style.display="none")
        // let img=e.target.src.split("thumbnail.jpg")[0]
        console.log(e.target.alt);
        
        document.querySelector(`.product .slider .full-image img[alt=${e.target.alt}]`).style.display="block"
        // console.log(document.querySelector(`.product .slider .full-image img[src=${img+".jpg"}]`))
    })
})

document.querySelectorAll(".burger-menu a").forEach(el=>{
    el.addEventListener("click",function(){
        overLay.style.height=getPageHeight()+"px";
        console.log(window.outerHeight );
        overLay.style.height=document.height;
        overLay.style.display=document.querySelector(".burger-menu").style.display="none"

    })
})



burgerIcon.addEventListener('click',function(){
    let display=document.querySelector(".burger-menu").style.display;
    overLay.style.height=getPageHeight()+"px";

    document.querySelector(".burger-menu").style.display= display=="flex"?"none":"flex"
    overLay.style.display=display=="flex"?"none":"block"
    // console.log(document.querySelector(".burger-menu"));
})

function slide(n,elements){
    let length=elements.length
    elements.forEach(img=>{
        img.style.display="none"
    })

    if(n<0){
        count=count<0?length-1:count;
        console.log(count);
    }else{
        count=count>length-1?0:count;
        console.log(count);


    }
    elements[count].style.display="block"
    count+=n
    console.log("after",count);

}
document.querySelectorAll(`.product .slider .full-image img`).forEach(img=>{
    img.addEventListener("click",function(){
        document.querySelector(".slider-fullscreen").classList.add("fullscreen")
        overLay.style.display="block"
        // overLay.style.opacity=.8
        overLay.style.height=getPageHeight()+"px";

    })
})

document.querySelectorAll(".product .slider-fullscreen .thumbnails img").forEach(el=>{
    el.addEventListener("click",function(e){
        document.querySelectorAll(`.product .slider-fullscreen .full-image img`).forEach(el=>el.style.display="none")
        // let img=e.target.src.split("thumbnail.jpg")[0]
        console.log(e.target.alt);
        
        document.querySelector(`.product .slider-fullscreen .full-image img[alt=${e.target.alt}]`).style.display="block"
        // console.log(document.querySelector(`.product .slider .full-image img[src=${img+".jpg"}]`))
    })
})
// setInterval(console.log(document.height),1000)