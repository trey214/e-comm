const cart = []; 
function addToCart(button) { const product = button.parentElement; 
    const name = product.getAttribute('data-name'); 
    const price = parseFloat(product.getAttribute('data-price')); 
    const existingProduct = cart.find(item => item.name === name); 
    if (existingProduct) { existingProduct.quantity++; } 
    else { cart.push({ name, price, quantity: 1 }); 
} updateCart();
 } 
 function updateCart() { 
    const cartItems = document.getElementById('cart-items'); 
    const cartTotal = document.getElementById('cart-total'); 
    cartItems.innerHTML = ''; 
    let total = 0; 
    cart.forEach(item => { const li = document.createElement('li'); 
        li.textContent = `${item.name} - $${item.price.toFixed(2)} x ${item.quantity}`; 
        cartItems.appendChild(li); 
        total += item.price * item.quantity; 
    }); 
    cartTotal.textContent = total.toFixed(2); 
}
