document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.burger-menu');
    const nav = document.querySelector('.nav');

    burgerMenu.addEventListener('click', () => {
        nav.classList.toggle('active');
        burgerMenu.classList.toggle('active');
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
            1280: {
                slidesPerView: 4,
            },
        },
    });
});

const products = [
    {
        tag: "Гаряче",
        saleTag: "-50%",
        image: "img/card4.png",
        name: "Шкіряна куртка Freestyle Crew Racer",
        price: "$595.00",
        oldPrice: "$1000",
        rating: 5
    },
    {
        tag: "Гаряче",
        saleTag: "",
        image: "img/card3.png",
        name: "Ретро-куртка Nuptse 1996 року чорного кольору",
        price: "$149.99",
        oldPrice: "",
        rating: 5
    },
    {
        tag: "Гаряче",
        saleTag: "",
        image: "img/card2.png",
        name: "Чорний бомбер Chilliwack HUMANATURE",
        price: "$1195.99",
        oldPrice: "",
        rating: 5
    },
    {
        tag: "Гаряче",
        saleTag: "",
        image: "img/card6.png",
        name: "96 Куртка-бомбер Nuptse Dip Dye",
        price: "$400.99",
        oldPrice: "",
        rating: 5
    },
    {
        tag: "Гаряче",
        saleTag: "",
        image: "img/card7.png",
        name: "Чорна куртка Harrington із натуральної шкіри",
        price: "$249.99",
        oldPrice: "",
        rating: 5
    },
    {
        tag: "Гаряче",
        saleTag: "",
        image: "img/card1.png",
        name: "Чоловічий стьобаний бомбер з діамантами",
        price: "$199.95",
        oldPrice: "",
        rating: 5
    },
    {
        tag: "Гаряче",
        saleTag: "",
        image: "img/card8.png",
        name: "Пальто Paradigm Chilliwack Black Label",
        price: "$1495.00",
        oldPrice: "",
        rating: 5
    },
    {
        tag: "Гаряче",
        saleTag: "",
        image: "img/card9.png",
        name: "Коричневий чоловічий дощовик Torrentshell 3L",
        price: "$149.00",
        oldPrice: "",
        rating: 5
    }
];

function createProductCard(product) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    if (product.tag) {
        const tag = document.createElement("div");
        tag.classList.add("tag");
        tag.textContent = product.tag;
        productCard.appendChild(tag);
    }

    if (product.saleTag) {
        const saleTag = document.createElement("div");
        saleTag.classList.add("sale-tag");
        saleTag.textContent = product.saleTag;
        productCard.appendChild(saleTag);
    }

    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.name;
    productCard.appendChild(img);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const ratingDiv = document.createElement("div");
    for (let i = 0; i < product.rating; i++) {
        const star = document.createElement("i");
        star.classList.add("fa-solid", "fa-star", "fa-sm");
        ratingDiv.appendChild(star);
    }
    productInfo.appendChild(ratingDiv);

    const productName = document.createElement("h3");
    productName.textContent = product.name;
    productInfo.appendChild(productName);

    const price = document.createElement("p");
    price.classList.add("price");
    price.textContent = product.price;
    if (product.oldPrice) {
        const oldPrice = document.createElement("span");
        oldPrice.classList.add("sale");
        oldPrice.textContent = product.oldPrice;
        price.appendChild(oldPrice);
    }
    productInfo.appendChild(price);

    productCard.appendChild(productInfo);
    return productCard;
}

function displayProducts() {
    const productContainer = document.getElementById("product-container");
    products.forEach(product => {
        const productCard = createProductCard(product);
        productContainer.appendChild(productCard);
    });
}

displayProducts();


const modal = document.getElementById("contactModal");
const btn = document.getElementById("contactBtn");
const span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
document.getElementById("contactForm").onsubmit = function(event) {
    event.preventDefault();
    alert("Форма відправлена!");
    modal.style.display = "none";
}
