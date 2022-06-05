const products = [
    {
        brand: 'Nike',
        title: 'Weight',
        price: '20$',
        image: './img/weight.jpg'
    },
    {
        brand: 'Adidas',
        title: 'Dumble',
        price: '15$',
        image: './img/dumble.jpg'
    },
    {
        brand: 'Puma',
        title: 'Running Machine',
        price: '50$',
        image: './img/running.jpg'
    },
    {
        brand: 'Pico',
        title: 'Shoe',
        price: '25$',
        image: './img/shoe.jpg'
    }
];

showProducts();
function showProducts() {
    const productCard = document.querySelector('.products');
    productCard.innerHTML = "";
    products.forEach(product => {
        const productEl = document.createElement('div');
        productEl.classList.add("card");
        productEl.innerHTML = `
            <img src="${product.image}" alt="${product.image}">
            <p>${product.brand}</p>
            <h3>${product.title}</h3>
            <p>${product.price}</p>
            <button>Buy Now</button>
        `;
        productCard.appendChild(productEl);
    })
}