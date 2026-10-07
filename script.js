// ========================================
// اطلاعات همه محصولات
// ========================================

const products = [

{
id: 1,
name: "آیفون ۱۷ پرو",
specs: "256GB | 12GB RAM",
price: 119900000,
image: "img/iphone17pro.png"
},

{
id: 2,
name: "گلکسی S26 Ultra",
specs: "512GB | 12GB RAM",
price: 109500000,
image: "img/galexys26ultra.png"
},

{
id: 3,
name: "شیائومی ۱۵ Ultra",
specs: "512GB | 16GB RAM",
price: 78900000,
image: "img/xiaomi15ultra.png"
},

{
id: 4,
name: "پیکسل ۱۰ پرو",
specs: "256GB | 16GB RAM",
price: 85900000,
image: "img/pixel10pro.png"
},

{
id: 5,
name: "آیفون ۱۵ پرو",
specs: "256GB | 8GB RAM",
price: 82500000,
image: "img/iphone15pro.png"
},

{
id: 6,
name: "آیفون ۱۵",
specs: "128GB | 6GB RAM",
price: 59900000,
image: "img/iphone15.png"
},

{
id: 7,
name: "آیفون ۱۶",
specs: "128GB | 8GB RAM",
price: 72900000,
image: "img/iphone16.png"
},

{
id: 8,
name: "آیفون ۱۶ پرو",
specs: "256GB | 8GB RAM",
price: 92900000,
image: "img/iphone16pro.png"
},

{
id: 9,
name: "گلکسی S26",
specs: "256GB | 12GB RAM",
price: 82900000,
image: "img/galexys26.png"
},

{
id: 10,
name: "گلکسی S26 Plus",
specs: "256GB | 12GB RAM",
price: 91900000,
image: "img/galexys26+.png"
},

{
id: 11,
name: "پیکسل ۱۰",
specs: "256GB | 12GB RAM",
price: 72000000,
image: "img/pixel10.png"
},

{
id: 12,
name: "شیائومی ۱۵",
specs: "256GB | 12GB RAM",
price: 65000000,
image: "img/xiaomi15.png"
},

{
id: 14,
name: "آیفون ۱۷",
specs: "256GB | 8GB RAM",
price: 92000000,
image: "img/iphone17.png"
},


// ========================================
// هدفون ها
// ========================================

{
id: 15,
name: "AirPods Pro 3",
brand: "Apple",
specs: "ANC | USB-C | 30 ساعت شارژ",
price: 12900000,
image: "headphones img/airpodspro3.png"
},


{
id: 16,
name: "AirPods 4",
brand: "Apple",
specs: "USB-C | Spatial Audio | 30 ساعت شارژ",
price: 8900000,
image: "headphones img/airpods4.png"
},


{
id: 17,
name: "Galaxy Buds 4 Pro",
brand: "Samsung",
specs: "ANC | Bluetooth 5.4 | 38 ساعت شارژ",
price: 10900000,
image: "headphones img/galaxybuds4pro.png"
},


{
id: 18,
name: "Galaxy Buds 4",
brand: "Samsung",
specs: "Bluetooth 5.4 | 30 ساعت شارژ",
price: 6900000,
image: "headphones img/galexybuds4.png"
},


{
id: 19,
name: "Sony WH-1000XM6",
brand: "Sony",
specs: "ANC | Over Ear | 40 ساعت شارژ",
price: 23900000,
image: "headphones img/sonywh1000xm6.png"
},


{
id: 20,
name: "Sony WF-1000XM5",
brand: "Sony",
specs: "ANC | In Ear | 24 ساعت شارژ",
price: 14900000,
image: "headphones img/sonywf1000xm5.png"
},


{
id: 21,
name: "JBL Tour One M3",
brand: "JBL",
specs: "ANC | Bluetooth 5.3 | 70 ساعت شارژ",
price: 15900000,
image: "headphones img/jbltouronem3.png"
},


{
id: 22,
name: "JBL Live 770NC",
brand: "JBL",
specs: "ANC | Over Ear | 65 ساعت شارژ",
price: 8900000,
image: "headphones img/jbllive770nc.png"
},


{
id: 23,
name: "Nothing Ear (3)",
brand: "Nothing",
specs: "ANC | Transparent Mode | 24 ساعت شارژ",
price: 7500000,
image: "headphones img/nothingear3.png"
},


{
id: 24,
name: "Nothing Ear (a)",
brand: "Nothing",
specs: "ANC | Bluetooth 5.4 | 42 ساعت شارژ",
price: 4900000,
image: "headphones img/nothingeara.png"
},


{
id: 25,
name: "Xiaomi Buds 5 Pro",
brand: "Xiaomi",
specs: "ANC | Hi-Res Audio | 38 ساعت شارژ",
price: 7900000,
image: "headphones img/xiaomibuds5pro.png"
},


{
id: 26,
name: "Huawei FreeBuds Pro 4",
brand: "Huawei",
specs: "ANC | Hi-Res Audio | 33 ساعت شارژ",
price: 11900000,
image: "headphones img/huaweifreebudspro4.png"
}

];


// ========================================
// اطلاعات سبد خرید
// ========================================

let cart = JSON.parse(localStorage.getItem("cart")) || [];


// ========================================
// ذخیره سبد خرید
// ========================================

function saveCart() {

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

}


// ========================================
// نمایش تعداد محصولات سبد
// ========================================

function updateCartCount() {

    const cartCount =
        document.getElementById("cart-count");

    if (!cartCount) {
        return;
    }

    let totalQuantity = 0;

    cart.forEach(function(item) {
        totalQuantity += item.quantity;
    });

    cartCount.textContent =
        totalQuantity.toLocaleString("fa-IR");

}


// ========================================
// اضافه کردن محصول به سبد
// ========================================

function addToCart(productId) {

    const product = products.find(function(item) {
        return item.id === productId;
    });

    if (!product) {
        return;
    }


    const existingProduct =
        cart.find(function(item) {
            return item.id === productId;
        });


    if (existingProduct) {

        existingProduct.quantity++;

    } else {

        cart.push({
            id: productId,
            quantity: 1
        });

    }


    saveCart();

    updateCartCount();

    showToast("محصول به سبد خرید اضافه شد");

}


// ========================================
// افزایش تعداد محصول
// ========================================

function increaseQuantity(id) {

    const product =
        cart.find(function(item) {
            return item.id === id;
        });


    if (product) {

        product.quantity++;

    }


    saveCart();

    renderCart();

    updateCartCount();

}


// ========================================
// کاهش تعداد محصول
// ========================================

function decreaseQuantity(id) {

    const product =
        cart.find(function(item) {
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

    renderCart();

    updateCartCount();

}


// ========================================
// حذف محصول
// ========================================

function removeProduct(id) {

    cart = cart.filter(function(item) {
        return item.id !== id;
    });


    saveCart();

    renderCart();

    updateCartCount();

}


// ========================================
// فرمت قیمت
// ========================================

function formatPrice(price) {

    return price.toLocaleString("fa-IR") + " تومان";

}


// ========================================
// نمایش سبد خرید
// ========================================

function renderCart() {

    const cartItems =
        document.getElementById("cart-items");

    const summaryCount =
        document.getElementById("summary-count");

    const summaryTotal =
        document.getElementById("summary-total");

    const finalTotal =
        document.getElementById("final-total");


    if (!cartItems) {
        return;
    }


    cartItems.innerHTML = "";


    // اگر سبد خالی باشد

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <div class="empty-cart">

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


        if (summaryCount) {
            summaryCount.textContent = "۰";
        }

        if (summaryTotal) {
            summaryTotal.textContent = "۰ تومان";
        }

        if (finalTotal) {
            finalTotal.textContent = "۰ تومان";
        }

        return;
    }


    let total = 0;

    let totalQuantity = 0;


    // نمایش محصولات سبد

    cart.forEach(function(item) {

        const product =
            products.find(function(product) {
                return product.id === item.id;
            });


        if (!product) {
            return;
        }


        const productTotal =
            product.price * item.quantity;


        total += productTotal;

        totalQuantity += item.quantity;


        const cartItem =
            document.createElement("div");


        cartItem.className =
            "cart-item";


        cartItem.innerHTML = `

            <div class="cart-product-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

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


    // خلاصه سفارش

    if (summaryCount) {

        summaryCount.textContent =
            totalQuantity.toLocaleString("fa-IR");

    }


    if (summaryTotal) {

        summaryTotal.textContent =
            formatPrice(total);

    }


    if (finalTotal) {

        finalTotal.textContent =
            formatPrice(total);

    }

}


// ========================================
// دکمه‌های افزودن به سبد در صفحات
// ========================================

const cartButtons =
    document.querySelectorAll(".add-cart");


cartButtons.forEach(function(button) {

    button.addEventListener("click", function(e) {

        e.preventDefault();
        e.stopPropagation();

        const productId =
            Number(button.dataset.id);

        addToCart(productId);

    });

});


// ========================================
// اجرای اولیه
// ========================================

updateCartCount();

renderCart();


// ========================================
// حساب کاربری
// ========================================

const accountButton =
    document.getElementById("account-button");


const currentUser =
    JSON.parse(
        localStorage.getItem("currentUser")
    );


if (accountButton && currentUser) {

    accountButton.textContent =
        currentUser.name;

    accountButton.href =
        "profile.html";

}











function openProduct(event, page) {

    if (event.target.closest(".add-cart")) {
        return;
    }

    window.location.href = page;

}


function showToast(message) {

    const toast = document.createElement("div");

    toast.className = "toast";

    toast.textContent = message;


    document.body.appendChild(toast);


    setTimeout(function() {

        toast.classList.add("show");

    }, 100);


    setTimeout(function() {

        toast.classList.remove("show");


        setTimeout(function() {

            toast.remove();

        }, 300);


    }, 2500);

}







// ========================================
// فیلتر و جستجوی محصولات
// ========================================

const searchInput = document.getElementById("search-input");

const brandButtons = document.querySelectorAll(".filter-btn");

const priceButtons = document.querySelectorAll(".price-btn");

const sortSelect = document.getElementById("sort-select");

const productGrid = document.getElementById("product-grid");


let selectedBrand = "all";

let selectedPrice = "all";


let productsCards = Array.from(
    document.querySelectorAll(".product-link")
);





function filterProducts(){


    let searchValue = "";


    if(searchInput){

        searchValue = searchInput.value
        .toLowerCase()
        .trim();

    }



    productsCards.forEach(function(link){


        const card =
        link.querySelector(".product-card");


        if(!card) return;



        const name =
        (card.dataset.search || "")
        .toLowerCase();



        const brand =
        card.dataset.brand || "";



        const price =
        Number(card.dataset.price) || 0;





        const searchMatch =
        searchValue === "" ||
        name.includes(searchValue);




        const brandMatch =
        selectedBrand === "all" ||
        brand === selectedBrand;





        let priceMatch = true;



        if(selectedPrice === "low"){

            priceMatch = price < 70000000;

        }


        if(selectedPrice === "mid"){

            priceMatch =
            price >= 70000000 &&
            price <= 100000000;

        }


        if(selectedPrice === "high"){

            priceMatch =
            price > 100000000;

        }





        if(
            searchMatch &&
            brandMatch &&
            priceMatch
        ){

            link.style.display = "";


        }else{


            link.style.display = "none";


        }



    });


}








// سرچ

if(searchInput){

    searchInput.addEventListener(
        "input",
        filterProducts
    );

}






// برند

brandButtons.forEach(function(button){


    button.addEventListener(
    "click",
    function(){


        brandButtons.forEach(function(btn){

            btn.classList.remove("active");

        });


        button.classList.add("active");


        selectedBrand =
        button.dataset.brand;


        filterProducts();


    });


});







// قیمت

priceButtons.forEach(function(button){


    button.addEventListener(
    "click",
    function(){


        priceButtons.forEach(function(btn){

            btn.classList.remove("active");

        });


        button.classList.add("active");


        selectedPrice =
        button.dataset.price;


        filterProducts();


    });


});





// مرتب سازی

if(sortSelect){


sortSelect.addEventListener(
"change",
function(){


let value = sortSelect.value;


if(value === "cheap"){


productsCards.sort((a,b)=>{


return Number(
a.querySelector(".product-card").dataset.price
)
-
Number(
b.querySelector(".product-card").dataset.price
);


});


}



if(value === "expensive"){


productsCards.sort((a,b)=>{


return Number(
b.querySelector(".product-card").dataset.price
)
-
Number(
a.querySelector(".product-card").dataset.price
);


});


}



productsCards.forEach(function(item){

productGrid.appendChild(item);

});


filterProducts();


});


}






const backButton = document.getElementById("back-button");


if(backButton){

    backButton.addEventListener("click", function(){

        if(window.history.length > 1){

            window.history.back();

        }else{

            window.location.href = "index.html";

        }

    });

}







// =========================
// Headphone Filters
// =========================


const brandFilters = document.querySelectorAll(
    '.headphone-filters input[type="checkbox"]'
);


const priceFilter = document.getElementById(
    'headphone-price-filter'
);


const headphoneCards = document.querySelectorAll(
    '.product-link:has(.product-card[data-brand])'
);





function filterHeadphones(){


    let selectedBrands = [];


    brandFilters.forEach((checkbox)=>{


        if(checkbox.checked){

            selectedBrands.push(
                checkbox.value.toLowerCase()
            );

        }


    });




    let selectedPrice = priceFilter.value;





    headphoneCards.forEach((card)=>{


        let product = card.querySelector(".product-card");


        let brand = product.dataset.brand.toLowerCase();


        let price = Number(product.dataset.price);





        let brandMatch =
        selectedBrands.length === 0 ||
        selectedBrands.includes(brand);





        let priceMatch = true;



        if(selectedPrice !== "all"){



            if(selectedPrice === "5000000"){


                priceMatch = price < 5000000;


            }



            else if(selectedPrice === "10000000"){


                priceMatch =
                price >= 5000000 &&
                price <= 10000000;


            }



            else if(selectedPrice === "20000000"){


                priceMatch =
                price > 10000000 &&
                price <= 20000000;


            }



            else if(selectedPrice === "max"){


                priceMatch = price > 20000000;


            }


        }






        if(brandMatch && priceMatch){


            card.style.display = "";


        }

        else{


            card.style.display = "none";


        }



    });



}






brandFilters.forEach((checkbox)=>{


    checkbox.addEventListener(
        "change",
        filterHeadphones
    );


});





priceFilter.addEventListener(
    "change",
    filterHeadphones
);