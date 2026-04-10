const products = [
    {
        id: 1,
        name: "Shoes",
        price: 999,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    },
    {
        id: 2,
        name: "Watch",
        price: 1499,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
    },
    {
        id: 3,
        name: "T-Shirt",
        price: 499,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
    }
];

let cart = [];

function displayProducts(items) {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";

    items.forEach(product => {
        productList.innerHTML += `
            <div class="card">
                <img src="${product.image}">
                <h3>${product.name}</h3>
                <p>₹${product.price}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
    });
}

function addToCart(id) {
    cart.push(id);
    document.getElementById("cart-count").innerText = cart.length;
}

document.getElementById("search").addEventListener("input", function() {
    const value = this.value.toLowerCase();
    const filtered = products.filter(p =>
        p.name.toLowerCase().includes(value)
    );
    displayProducts(filtered);
});

displayProducts(products);