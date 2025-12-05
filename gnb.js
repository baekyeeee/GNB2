
//導覽列滾動放大
const header = document.getElementById("mainNav");
if (header) {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}
//登入卡片導覽方塊
const accountBtn = document.getElementById("usericon")
const loginClick = document.getElementById("loginword");
const signupClick = document.getElementById("signupword");
const loginBtn = document.getElementById("submit-btn");
const signupBtn = document.getElementById("signup-btn");
const loginblock = document.getElementById("loginblock");
const userCard = document.getElementById("userloginbottom");
const userClose = document.getElementById("userclosebottom");

if (signupClick) {
  signupClick.addEventListener("click", function () {
    loginBtn.style.display = "none";
    signupBtn.style.display = "block";
    loginblock.style.left = "165px";

  });
}

if (loginClick) {
  loginClick.addEventListener("click", function () {
    loginBtn.style.display = "block";
    signupBtn.style.display = "none";
    loginblock.style.left = "-9px";
  });
}

if (userClose) {
  userClose.addEventListener("click", function () {
    userCard.style.display = "none";
  });
}

if (accountBtn) {
  accountBtn.addEventListener("click", function () {
    userCard.style.display = "flex";
  })
}


//漢堡選單動畫
const burgerIcon = document.getElementById("burgericon");
if (burgerIcon) {
  burgerIcon.addEventListener("click", function () {
    // classList.toggle 的意思是：
    // 如果 burgerIcon 身上有 "active" 這個 class，就把它拿掉 (復原)
    // 如果沒有，就把它加上去 (變叉叉)
    this.classList.toggle("active");
  });
}


// news卡片點擊
const bigcard = document.getElementById("newsbigcard");
const btns = document.querySelectorAll(".btn-reset");
const btnss = document.querySelectorAll(".news-righticon");
const close = document.getElementById("closebottom");
if (bigcard) {
  if (btns) {
    btns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        bigcard.style.display = "flex";
      });
    });
  }
  if (btnss) {
    btnss.forEach(function (btn2) {
      btn2.addEventListener("click", function () {
        bigcard.style.display = "flex";
      });
    });
  }

  if (close) {
    close.addEventListener("click", function () {
      bigcard.style.display = "none";
    });
  }

  bigcard.addEventListener("click", function () {
    bigcard.style.display = "none";
  });
}

//打開購物車大卡片
const opencart = document.getElementById("carticon");
const cartbigcard = document.getElementById("cartModal");
const cartclose = document.querySelectorAll("#cartcloseBtn, #keeporder");


opencart.addEventListener("click" , function(){
  cartbigcard.style.display = "flex"
})

cartclose.forEach(btn => {
  btn.addEventListener("click", function(){
     cartbigcard.style.display = "none"
  })
})

// 購物車數量加減

let cartClick = 1;
const cartNumber = document.getElementById('cartNumber')

document.getElementById('cartBtn-plus').addEventListener('click', function(){
            cartClick++;
            cartNumber.innerText = cartClick;
})

document.getElementById('cartBtn-minus').addEventListener('click', function(){
    if(cartClick >1){
            cartClick--;
            cartNumber.innerText = cartClick;
        }
})













