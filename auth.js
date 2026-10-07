// ========================================
// عناصر صفحه
// ========================================

const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");

const switchAuth = document.getElementById("switch-auth");
const switchText = document.getElementById("switch-text");

const authTitle = document.getElementById("auth-title");
const authDescription = document.querySelector(".auth-description");

const authMessage = document.getElementById("auth-message");


// ========================================
// تغییر بین ورود و ثبت نام
// ========================================

switchAuth.addEventListener("click", function() {

    // اگر الان فرم ورود نمایش داده می‌شود
    if (!loginForm.classList.contains("hidden")) {

        // ورود را مخفی کن
        loginForm.classList.add("hidden");

        // ثبت نام را نمایش بده
        registerForm.classList.remove("hidden");

        // تغییر عنوان
        authTitle.textContent = "ساخت حساب کاربری";

        authDescription.textContent =
            "برای استفاده از امکانات موبیکس ثبت نام کن";

        // تغییر متن پایین صفحه
        switchText.textContent =
            "قبلاً حساب ساخته‌ای؟";

        switchAuth.textContent =
            "ورود";

    }

    // اگر الان فرم ثبت نام نمایش داده می‌شود
    else {

        registerForm.classList.add("hidden");

        loginForm.classList.remove("hidden");

        authTitle.textContent =
            "ورود به حساب";

        authDescription.textContent =
            "به حساب کاربری موبیکس خودت وارد شو";

        switchText.textContent =
            "حساب کاربری نداری؟";

        switchAuth.textContent =
            "ثبت نام";

    }


    // پاک کردن پیام قبلی
    authMessage.textContent = "";

});


// ========================================
// ثبت نام
// ========================================

registerForm.addEventListener("submit", function(event) {

    // جلوگیری از رفرش شدن صفحه
    event.preventDefault();


    // گرفتن اطلاعات فرم
    const name =
        document.getElementById("register-name").value.trim();

    const family =
        document.getElementById("register-family").value.trim();

    const phone =
        document.getElementById("register-phone").value.trim();

    const email =
        document.getElementById("register-email").value.trim();

    const password =
        document.getElementById("register-password").value;


    // گرفتن کاربران قبلی
    let users =
        JSON.parse(localStorage.getItem("users")) || [];


    // بررسی اینکه شماره قبلاً ثبت نشده باشد
    const existingUser = users.find(function(user) {

        return user.phone === phone;

    });


    if (existingUser) {

        authMessage.textContent =
            "این شماره موبایل قبلاً ثبت شده است.";

        authMessage.style.color = "#ff5555";

        return;

    }


    // ساخت کاربر جدید
    const newUser = {

        id: Date.now(),

        name: name,

        family: family,

        phone: phone,

        email: email,

        password: password

    };


    // اضافه کردن کاربر
    users.push(newUser);


    // ذخیره کاربران
    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );


    // پیام موفقیت
    authMessage.textContent =
        "ثبت نام با موفقیت انجام شد ✓";

    authMessage.style.color = "#4caf50";


    // پاک کردن فرم
    registerForm.reset();


    // بعد از ۱ ثانیه رفتن به فرم ورود
    setTimeout(function() {

        switchAuth.click();

    }, 1000);

});


// ========================================
// ورود
// ========================================

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();


    // گرفتن اطلاعات
    const phone =
        document.getElementById("login-phone").value.trim();

    const password =
        document.getElementById("login-password").value;


    // گرفتن کاربران
    const users =
        JSON.parse(localStorage.getItem("users")) || [];


    // پیدا کردن کاربر
    const user = users.find(function(user) {

        return (
            user.phone === phone &&
            user.password === password
        );

    });


    // اگر کاربر پیدا نشد
    if (!user) {

        authMessage.textContent =
            "شماره موبایل یا رمز عبور اشتباه است.";

        authMessage.style.color = "#ff5555";

        return;

    }


    // ذخیره کاربر وارد شده
    localStorage.setItem(
        "currentUser",
        JSON.stringify(user)
    );


    // پیام موفقیت
    authMessage.textContent =
        "ورود با موفقیت انجام شد ✓";

    authMessage.style.color = "#4caf50";


    // انتقال به صفحه اصلی
    setTimeout(function() {

        window.location.href = "index.html";

    }, 700);

});