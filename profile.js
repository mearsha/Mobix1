// ========================================
// گرفتن کاربر فعلی
// ========================================

const currentUser =
    JSON.parse(localStorage.getItem("currentUser"));


// ========================================
// اگر وارد نشده باشد
// ========================================

if (!currentUser) {

    window.location.href = "login.html";

}


// ========================================
// نمایش اطلاعات
// ========================================

document.getElementById("profile-name").textContent =
    currentUser.name + " " + currentUser.family;


document.getElementById("profile-phone").textContent =
    "📱 " + currentUser.phone;


document.getElementById("profile-email").textContent =
    "✉ " + currentUser.email;


// ========================================
// خروج از حساب
// ========================================

document.getElementById("logout-button")
    .addEventListener("click", function() {

        localStorage.removeItem("currentUser");

        window.location.href = "index.html";

    });