let wrapper = document.querySelector(".sliderWrapper");
let menuItem = document.querySelectorAll(".menuItem");

let products=[
{
    id:1,
    title: "NIKE SHOES",
    price: 999,
    colors: [
        {
            code:"black",
            img: "./img/air.png",
        },
        {
            code:"darkblue",
            img:"./img/air2.png"
        },
    ],
},
{
    id:2,
    title: "JORDON",
    price: 1999,
    colors: [
        {
            code:"white",
            img: "./img/blazer.png",
        },
        {
            code:"green",
            img:"./img/blazer2.png"
        },
    ],
},
{
    id:3,
    title: "BATA",
    price: 2999,
    colors: [
        {
            code:"grey",
            img: "./img/jordan.png",
        },
        {
            code:"green",
            img:"./img/jordan2.png"
        },
    ],
},
{
    id:4,
    title: "FASHION",
    price: 3999,
    colors: [
        {
            code:"grey",
            img: "./img/hippie.png",
        },
        {
            code:"black",
            img:"./img/hippie2.png"
        },
    ],
},
]

//  store all details in variables
let choosenProduct = products[0];

let currentProuctImg  = document.querySelector(".productimg")
let currentProductTitle = document.querySelector(".productTitle")
let currentProductPrice = document.querySelector(".productPrice")
let currentProductDes = document.querySelector(".productDes")
let currentProductSize = document.querySelectorAll(".size")
let currentProductColor = document.querySelectorAll(".color")


menuItem.forEach((item, index)=>{
    
    item.addEventListener("click",()=>{
        // change for the current slide 
        wrapper.style.transform = `translateX(${-100 * index}vw)` ;   
        
        // change the choosen product
        choosenProduct = products[index]

        // to change img of product for only 1st image from array
        currentProuctImg.src = choosenProduct.colors[0].img

        // change text of choosen product 
        currentProductTitle.textContent = choosenProduct.title

        //  tochange the price
        currentProductPrice.textContent = "RS " + choosenProduct.price + "/-"

        // to assign the color in product 
        // queryselectorAll used hey so use foreach 
        currentProductColor.forEach((color,index)=>{
            color.style.backgroundColor = choosenProduct.colors[index].code
        });
        
    
    });
});
// to change images 
currentProductColor.forEach((color,index)=>{
    color.addEventListener("click",()=>{
        currentProuctImg.src = choosenProduct.colors[index].img
    });
});

// for sizes 
currentProductSize.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentProductSize.forEach((size)=>{
            size.style.backgroundColor="transparent";
            size.style.color = "black"
        });
    size.style.backgroundColor="black";
    size.style.color = "white";
});
})





// mobile click menu
var Mclosed = document.getElementById('closed');
var Mmenu = document.getElementById("bar");
var MmenuSlider =document.querySelector(".navBottom1");

Mmenu.addEventListener("click",function(){
   MmenuSlider.style.right= 0;
})

Mclosed.addEventListener("click",function(){
 MmenuSlider.style.right= "-150px";
})