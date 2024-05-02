const addProduct = () => {
    const productName = document.getElementById('product-name');
    const productQty = document.getElementById('product-qty');

    const name = productName.value;
    const qty = productQty.value;

    productName.value = '';
    productQty.value = '';

    displayProduct(name, qty)

    // Save the product to local storage
    saveProductToLocalStorage(name, qty);
}


const displayProduct = (product, quantity) => {
    const ul = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product}: ${quantity}`
    ul.appendChild(li);
}

const getStoredShoppingCart = () => {
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        cart = JSON.parse(storedCart);
    }
    return cart;
}

const saveProductToLocalStorage = (product, quantity) => {
    const cart = getStoredShoppingCart();
    cart[product] = quantity;
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);

}

const displayProductsFromLocalStorage = () => {
    const savedCart = getStoredShoppingCart();
    for(const product in savedCart){
        const quantity = savedCart[product];
        displayProduct(product, quantity);
    }
}

displayProductsFromLocalStorage()