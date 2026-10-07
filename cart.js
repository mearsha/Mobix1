// ========================================
// اطلاعات محصولات
// ========================================

const products = [

    {
        id: 1,
        name: "آیفون ۱۷ پرو",
        specs: "256GB | 12GB RAM",
        price: 119900000
    },

    {
        id: 2,
        name: "گلکسی S26 Ultra",
        specs: "512GB | 12GB RAM",
        price: 109500000
    },

    {
        id: 3,
        name: "شیائومی ۱۵ Ultra",
        specs: "512GB | 16GB RAM",
        price: 78900000
    },

    {
        id: 4,
        name: "پیکسل ۱۰ پرو",
        specs: "256GB | 16GB RAM",
        price: 85900000
    }

];


// ========================================
// گرفتن سبد خرید
// ========================================

let cart = JSON.parse(localStorage.getItem("cart")) || [];


// ========================================
// عناصر صفحه
// ========================================

const cartItems = document.getElementById("cart-items");

const summaryCount =
    document.getElementById("summary-count");

const summaryTotal =
    document.getElementById("summary-total");

const finalTotal =
    document.getElementById("final-total");


// ========================================
// نمایش قیمت
// ========================================

function formatPrice(price) {

    return price.toLocaleString("fa-IR") + " تومان";

}


// ========================================
// نمایش سبد خرید
// ========================================

function renderCart() {

    cartItems.innerHTML = "";


    // اگر سبد خالی بود
    if (cart.length === 0) {

        cartItems.innerHTML = `
            <div class="empty-cart">

                <div>
                    🛒
                </div>

                <h2>
                    سبد خریدت خالیه
                </h2>

                <p>
                    هنوز محصولی به سبد خرید اضافه نکردی.
                </p>

                <a href="products.html">
                    مشاهده محصولات
                </a>

            </div>
        `;

        summaryCount.textContent = "۰";
        summaryTotal.textContent = "۰ تومان";
        finalTotal.textContent = "۰ تومان";

        return;
    }


    let total = 0;
    let totalQuantity = 0;


    // نمایش محصولات
    cart.forEach(function(item) {

        const product = products.find(function(product) {
            return product.id === item.id;
        });


        if (!product) {
            return;
        }


        const productTotal =
            product.price * item.quantity;


        total += productTotal;

        totalQuantity += item.quantity;


        const cartItem = document.createElement("div");

        cartItem.className = "cart-item";


        cartItem.innerHTML = `

            <div class="cart-product-image">
                📱
            </div>


            <div class="cart-product-info">

                <h3>
                    ${product.name}
                </h3>

                <p>
                    ${product.specs}
                </p>

                <strong>
                    ${formatPrice(product.price)}
                </strong>

            </div>


            <div class="quantity-box">

                <button
                    class="quantity-btn"
                    onclick="increaseQuantity(${product.id})">
                    +
                </button>

                <span>
                    ${item.quantity}
                </span>

                <button
                    class="quantity-btn"
                    onclick="decreaseQuantity(${product.id})">
                    −
                </button>

            </div>


            <div class="cart-product-total">

                ${formatPrice(productTotal)}

            </div>


            <button
                class="remove-btn"
                onclick="removeProduct(${product.id})">

                ×

            </button>

        `;


        cartItems.appendChild(cartItem);

    });


    // نمایش خلاصه سفارش

    summaryCount.textContent =
        totalQuantity.toLocaleString("fa-IR");


    summaryTotal.textContent =
    formatPrice(total);


    finalTotal.textContent =
        formatPrice(total);

}


// ========================================
// افزایش تعداد
// ========================================

function increaseQuantity(id) {

    const product = cart.find(function(item) {
        return item.id === id;
    });


    if (product) {

        product.quantity++;

    }


    saveCart();

}


// ========================================
// کاهش تعداد
// ========================================

function decreaseQuantity(id) {

    const product = cart.find(function(item) {
        return item.id === id;
    });


    if (!product) {
        return;
    }


    product.quantity--;


    if (product.quantity <= 0) {

        cart = cart.filter(function(item) {
            return item.id !== id;
        });

    }


    saveCart();

}


// ========================================
// حذف محصول
// ========================================

function removeProduct(id) {

    cart = cart.filter(function(item) {
        return item.id !== id;
    });


    saveCart();

}


// ========================================
// ذخیره سبد خرید
// ========================================

function saveCart() {

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );


    renderCart();

}


// ========================================
// اجرای اولیه
// ========================================

renderCart();