// ========================================
// سیستم علاقه مندی ها
// ========================================


let wishlist =
JSON.parse(localStorage.getItem("wishlist")) || [];




// ذخیره

function saveWishlist(){

    localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
    );

}






// تعداد علاقه مندی هدر

function updateWishlistCount(){


    const count =
    document.getElementById("wishlist-count");


    if(count){

        count.textContent =
        wishlist.length.toLocaleString("fa-IR");

    }


}






// فعال کردن قلب های کارت محصولات

const favoriteButtons =
document.querySelectorAll(".favorite-btn");



favoriteButtons.forEach(function(button){


    const id =
    Number(button.dataset.id);



    if(wishlist.includes(id)){

        button.textContent = "♥";

        button.classList.add("active");

    }



    button.addEventListener("click",function(e){


        e.preventDefault();

        e.stopPropagation();



        if(wishlist.includes(id)){


            wishlist =
            wishlist.filter(function(item){

                return item !== id;

            });



            button.textContent = "♡";

            button.classList.remove("active");



        }else{


            wishlist.push(id);


            button.textContent = "♥";

            button.classList.add("active");


        }



        saveWishlist();

        updateWishlistCount();



    });



});









// ========================================
// نمایش محصولات علاقه مندی
// ========================================


function renderWishlist(){


    const container =
    document.getElementById("wishlist-items");



    if(!container){

        return;

    }



    container.innerHTML = "";





    if(wishlist.length === 0){


        container.innerHTML = `

        <div class="empty-cart">

            <h2>
                لیست علاقه‌مندی خالیه ❤️
            </h2>


            <p>
                هنوز محصولی ذخیره نکردی.
            </p>


            <a href="products.html">

                مشاهده محصولات

            </a>


        </div>

        `;


        return;

    }






    wishlist.forEach(function(id){



        const product =
        products.find(function(item){

            return item.id === id;

        });



        if(!product){

            return;

        }





        const card =
        document.createElement("div");



        card.className =
        "product-card";



        card.innerHTML = `


        <button 
        class="favorite-btn active"
        onclick="removeWishlist(${product.id})">

            ♥


        </button>



        <div class="product-phone">

            <img 
            src="${product.image}"
            class="img-products">

        </div>




        <h3>

            ${product.name}

        </h3>



        <p>

            ${product.specs}

        </p>



        <div class="product-bottom">


            <strong>

                ${product.price.toLocaleString("fa-IR")}
                تومان

            </strong>



            <button
            class="add-cart"
            data-id="${product.id}">

                +

            </button>



        </div>


        `;



        container.appendChild(card);



    });



}








// حذف از علاقه مندی

function removeWishlist(id){


    wishlist =
    wishlist.filter(function(item){

        return item !== id;

    });



    saveWishlist();

    renderWishlist();

    updateWishlistCount();


}







updateWishlistCount();

renderWishlist();