let carts =document.querySelectorAll('.btn btn-dark');
let products = [
    {
        name: "Bracelet ANIMALIA",
        price: 199.99,
        incart:0
    },
    {
        name: "ceinture pour femme",
        price: 299.99,
        incart:0
    },
    {
        name: "Bracelet ANIMALIA",
        price: 199.99,
        incart:0
    }
];
for(let i=0;i<carts.length;i++){
    carts[i].addEventListener("click", () => {
        cartNumbers()
    })

}

function cartNumbers(){
    let productNumbers=localStorage.getItem("cartNumbers")
    productNumbers=parseInt(productNumbers);
    localStorage.setItem('cartNumbers',1);


    