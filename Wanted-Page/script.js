const products = [
    {
        brand: 'Concept2',
        name: 'Indoor Rowing Machine',
        price: '$800',
        available: true,
        img: "./img/wanted-one.webp",
        usage: '1.5years',
        description: '14 inch seat height, 500lb, adjustable foot rests, stowaway design, ergonomic handle',
        strength: 'have not yet used in gym, still sturdy and can work like a new one, $145 off than normal price',
        weakness: 'one year used for personal (not gym used)',
        contact: '(+95) 9768987654',
    },
    {
        brand: 'Horizon7.0 AT',
        name: 'Treadmill',
        price: '$700',
        available: false,
        img: "./img/wanted-two.webp",
        usage: '1.5  years',
        description: ' 3.0 CHP motor, easy folding, great warranty',
        strength: 'have not yet used in gym, still sturdy and can work like a new one, $299 off than normal price, 1 year warranty left',
        weakness: 'one year and a half used for personal (not gym used)',
        contact: ' (+95) 9768342678',
    },
    {
        brand: 'PIDO',
        name: 'Yoga Map',
        price: '$25',
        available: true,
        img: './img/wanted-three.webp',
        usage: 'Still Unpacked',
        description: 'Non-slip, waterproof, tear resistant, soft',
        strength: '50% off than a new one, haven’t unpacked, have not used',
        weakness: '',
        contact: '(+95)9768342678',
    },
    {
        brand: 'Sunny',
        name: 'Stationary Bike',
        price: '$100',
        available: false,
        img: './img/wanted-four.png',
        usage: '0.5 year',
        description: 'digital motor, 4 way adjustable seats',
        strength: 'have not yet used in gym, still sturdy and can work like a new one, $99 off than normal price, 0.5 year warranty left',
        weakness: 'a half year used for personal (not gym used), a dent in side bar',
        contact: '(+95) 976457893',
    }
];

const search = document.getElementById("search");

showProducts();
function showProducts() {
    const productsCard = document.querySelector(".wanted-products");
    productsCard.innerHTML = "";

    products.forEach(product => {
        const cardEl = document.createElement('div');
        cardEl.classList.add('wanted-product-card');
        cardEl.innerHTML = `
            <img src="${product.img}" alt="${product.img}">
            <p>${product.brand}</p>
            <h3>${product.name}</h3>
            <h4>${product.price}</h4>
            <button class="detail">More details here <span><i class="fa-solid fa-arrow-right"></i></span></button>
            <div class="btn-container">
                <button class="btn" id="available" disabled>Available</button>
                <button class="btn" id="not-available" disabled>Sold Out</button>
            </div>
            <div class="pop-up">
                <div class="pop-up-container">
                    <i class="fa-solid fa-circle-xmark" id="close-btn"></i>
                    <p>Usage- <span>${product.usage}</span></p>
                    <p>Description- <span>${product.description}</span></p>
                    <p>Strength- <span>${product.strength}</span></p>
                    <p>Weakness- <span>${product.weakness}</span></p>
                    <p>Contact info- <span>${product.contact}</span></p>
                </div>
            </div>
        `;
        search.addEventListener('input', (e) => {
            const searchValue = e.target.value.toLowerCase();
            console.log(searchValue);
            const card = cardEl;
            const isVisible = product.name.toLocaleLowerCase().includes(searchValue);
            card.classList.toggle('hide', !isVisible);
        })
        const btnAvailable = cardEl.querySelector("#available");
        const btnUnavailable = cardEl.querySelector('#not-available');
        const detailBtn = cardEl.querySelector(".detail");
        const closeBtn = cardEl.querySelector("#close-btn");
        const popup = cardEl.querySelector('.pop-up');
        if(product.available === true) {
            btnAvailable.classList.add('available');
        }else {
            btnUnavailable.classList.add('sold-out');
        }
        detailBtn.addEventListener('click', () => {
            popup.classList.add("show");
        })
        closeBtn.addEventListener('click', () => {
            popup.classList.remove("show");
        })
        productsCard.appendChild(cardEl);
    })
}
