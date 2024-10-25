const toggle = document.querySelector("#toggle");
const cartShower = document.querySelector("#cart");
const main = document.querySelector("main");
const addBtns = document.querySelectorAll(".product-card button");
const allProductCards = document.querySelectorAll(".product-card");
const cartImage = document.querySelector("#cart img");
const addToCart = document.querySelector("#add-to-cart");
const size = document.querySelector("input[name='size']").value;
const quantty = document.querySelector("input[name='quantity']").value;
const allColors = document.querySelectorAll(".color");



number = 0;
colour = "";

let cartList = JSON.parse(localStorage.getItem("shoppingCart")) | [
    {
        product: "Formal Shoe",
        color:   "black",
        size: 28,
        price: 20,
        quantity: 2,
        total: 40
    }
]





















allColors.forEach(item => {
    item.addEventListener("click", () => {
        colour = item.style.background;
        alert(colour);
    });
})



toggle.addEventListener("click", () => {
    main.classList.toggle("blurry", false)
    cartShower.style.display = "none";


});


addToCart.addEventListener("click", () => {
    main.classList.toggle("blurry", false);
    cartShower.style.display = "none";
    type = allProductCards[number].children[1].innerHTML;
    amount = allProductCards[number].children[2].innerHTML;


})


addBtns.forEach( (button, index) => {
    button.addEventListener("click", () => {
        number = index;
        cartImage.src = allProductCards[index].firstElementChild.src;
        cartShower.style.display = "flex";
        main.classList.toggle("blurry");

    })
})