

function onLoadShoppingCart(){
    let productNumber = localStorage.getItem('kl')
    if(productNumber){
        document.querySelectorall('#val').innerHTML = productNumber;
    }
}


var compt = document.querySelectorAll('.btn')
console.log(compt[0])
for(let i=0;i<compt.length;i++){
    compt[i].addEventListener("click", () => {
        kl()
    })
}
function kl(){
    let local=localStorage.getItem("kl")
    local=parseInt(local);
    if (local){
      localStorage.setItem("kl",local+1)
      document.getElementById('val').innerHTML=local+1
    }
    else{
        localStorage.setItem("kl",1)
        document.getElementById('val').innerHTML=1
    }
}

 onLoadShoppingCart()