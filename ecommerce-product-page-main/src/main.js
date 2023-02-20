const burgerIcon=document.querySelector(".burger-icon")
const next=document.getElementById("next")
const prev=document.getElementById("prev")
const fullScreennext=document.getElementById("fullscreennext")
const fullScreenprev=document.getElementById("fullscreenprev")
const fullScreenClose=document.getElementById("fullscreenclose")
const overLay=document.querySelector(".overlay")
const AddToCart=document.getElementById("Addtocart")
const plus=document.querySelector(".plus")
const minus=document.querySelector(".minus")
const cartIcon=document.querySelector(".navigation .cart")



//hide all full-images when load
document.querySelectorAll(`.product .full-image img`).forEach(el=>el.style.display="none");

//show first full-images when load
document.querySelector(`.product .slider .full-image img`).style.display="block";
document.querySelector(`.product .slider-fullscreen .full-image img`).style.display="block";




let count=0;
//slide next
next.addEventListener("click",function(){
    let slider=document.querySelectorAll(`.product .slider .full-image img`)
    slide(1,slider)
})
//slide prev

prev.addEventListener("click",function(){
    let slider=document.querySelectorAll(`.product .slider .full-image img`)
    slide(-1,slider)
})
//slide next

fullScreennext.addEventListener("click",function(){
    let slider=document.querySelectorAll(`.product .slider-fullscreen .full-image img`)
    slide(1,slider)
})

//slide prev

fullScreenprev.addEventListener("click",function(){
    let slider=document.querySelectorAll(`.product .slider-fullscreen .full-image img`)
    slide(-1,slider)
})
//overlay gray screen
overLay.addEventListener("click",function(e){
    //hide overlay screen and menu when click

    overLay.style.display=document.querySelector(".burger-menu").style.display="none"
    document.querySelector(".slider-fullscreen").classList.remove("fullscreen")
    document.querySelector(".navigation .cartList").style.display="none";


})
//close fullscreen image
fullScreenClose.addEventListener("click",function(e){
    //hide overlay screen and menu when click
    overLay.style.display="none"
    document.querySelector(".slider-fullscreen").classList.remove("fullscreen")

})

//get full page height
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


//add event on thumbnails
document.querySelectorAll(".product .slider .thumbnails img").forEach(el=>{
    el.addEventListener("click",function(e){
        document.querySelectorAll(`.product .slider .full-image img`).forEach(el=>el.style.display="none")
        // let img=e.target.src.split("thumbnail.jpg")[0]
        // console.log(e.target.alt);
        
        //show target image when click on thumbnails
        document.querySelector(`.product .slider .full-image img[alt=${e.target.alt}]`).style.display="block"
        // console.log(document.querySelector(`.product .slider .full-image img[src=${img+".jpg"}]`))
    })
})




//show burger-menu as well as overlay screen
burgerIcon.addEventListener('click',function(){
    let display=document.querySelector(".burger-menu").style.display;
    overLay.style.height=getPageHeight()+"px";

    document.querySelector(".burger-menu").style.display= display=="flex"?"none":"flex"
    overLay.style.display=display=="flex"?"none":"block"
    // console.log(document.querySelector(".burger-menu"));
})

//hide burger-menu as well as overlay screen
document.querySelectorAll(".burger-menu a").forEach(el=>{
    el.addEventListener("click",function(){
        overLay.style.height=getPageHeight()+"px";
        console.log(window.outerHeight );
        overLay.style.height=document.height;
        overLay.style.display=document.querySelector(".burger-menu").style.display="none"

    })
})

//slide function 
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

//add event on images to go in fullscreen
document.querySelectorAll(`.product .slider .full-image img`).forEach(img=>{
    img.addEventListener("click",function(){
        document.querySelector(".slider-fullscreen").classList.add("fullscreen")
        overLay.style.display="block"
        // overLay.style.opacity=.8
        overLay.style.height=getPageHeight()+"px";
    })
})

//add event on thumbnails in fullscreen
document.querySelectorAll(".product .slider-fullscreen .thumbnails img").forEach(el=>{
    el.addEventListener("click",function(e){
        document.querySelectorAll(`.product .slider-fullscreen .full-image img`).forEach(el=>el.style.display="none")
        // let img=e.target.src.split("thumbnail.jpg")[0]
        console.log(e.target.alt);
        //show target image when click on thumbnails
        document.querySelector(`.product .slider-fullscreen .full-image img[alt=${e.target.alt}]`).style.display="block"
        // console.log(document.querySelector(`.product .slider .full-image img[src=${img+".jpg"}]`))
    })
})


//increase count
plus.addEventListener("click",function(e){
    itemCount(1)
})
//decrease count
minus.addEventListener("click",function(e){
    itemCount(-1)
})

function itemCount(n){
    let itemcount=document.querySelector(".count .itemcount")
    let count=parseInt(itemcount.innerText)+n;
    itemcount.innerText=count;
    if(count<=0){
        itemcount.innerText=0;
        itemcount.style.color="white"

    }else{
        itemcount.style.color="black"
        
    }
}

//AddToCart
AddToCart.addEventListener("click",function(){
    addItemToCart()
})

function addItemToCart(){
    let itemcount=document.querySelector(".count .itemcount").innerText
    let cart=document.querySelector(".navigation .cart p")
    if(parseInt(itemcount)>0){
        cart.style.display="block"
        
    }else{
        cart.style.display="none"
    }
    cart.innerText=parseInt(itemcount);
}

cartIcon.addEventListener("click",function(e){
    showHideCart()
})
function showHideCart(){
    let cartList=document.querySelector(".navigation .cartList")
    let display=cartList.style.display;
    overLay.style.display=display=="flex"?"none":"block"
    overLay.style.height=getPageHeight()+"px";

    cartList.style.display=display=="flex"?"none":"flex"
}

// setInterval(console.log(document.height),1000)