


// if (document.readyState == 'loading') {
//     document.addEventListener('DOMContentLoaded', ready)
// } else {
//     ready()
// }

// function ready() {}
    var removeCartItemButtons = document.getElementsByClassName('btn-warning')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.querySelector('.btn-purchase').addEventListener('click', purchaseClicked)


function purchaseClicked() {
    var cartItems = document.querySelector('.cart-items')
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement.parentElement.parentElement
    var title = shopItem.querySelector('.shop-item-title').innerText
    var price = shopItem.querySelector('.shop-item-price').innerText
    var imageSrc = shopItem.querySelector('.shop-item-image').src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.querySelector('.cart-items')
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            quantity++
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" id="inputnbr" value="1">
            <button class="btn btn-warning" type="button"><i class="fas fa-trash-alt"></i></button>
        </div><hr>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.querySelector('.btn-warning').addEventListener('click', removeCartItem)
    cartRow.querySelector('.cart-quantity-input').addEventListener('change', quantityChanged)
}

function updateCartTotal() {
    var cartItemContainer = document.querySelector('.cart-items')
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.querySelector('.cart-price')
        var quantityElement = cartRow.querySelector('.cart-quantity-input')
        var price = parseFloat(priceElement.innerText.replace('TND', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText =   total + 'TND'
}