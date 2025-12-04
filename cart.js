const cart = [];
let clickProduct = {};
let clickCount = 1;

// 點餐大卡片元素
const productModal = document.getElementById('productModal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalPrice = document.getElementById('modal-price');
const countDisplay = document.getElementById('count-display');
const optionradio = document.getElementById('modal-radio');

//加入購物車
 const addToCart = document.getElementById('addToCartBtn')

 addToCart.addEventListener("click", function(){
     const orderItem = {
            id: Date.now(),
            name: currentProduct.name,
            price: currentProduct.price,
            count: currentCount,
            total: currentProduct.price * currentCount
        };


 });

//點擊小卡出現大卡
document.querySelectorAll('.ordercard').forEach(function (card) {
    card.addEventListener("click", function () {
        const name = this.getAttribute('data-name');
        const price = parseInt(this.getAttribute('data-price'));
        const img = this.getAttribute('data-img');
        const category = this.dataset.category; 

        clickProduct = {
            name: name,
            price: price,
            img: img
        };

        modalTitle.innerText = name;
        modalPrice.innerText = price;
        modalImg.src = img;

        clickCount = 1;
        countDisplay.innerText = clickCount

        productModal.style.display = 'flex';

        if (category == 'burger') {
            optionradio.style.display = 'flex';
        } else {
            optionradio.style.display = 'none';
        }

    })

})


const orderclose = document.getElementById('ordercloseBtn')

orderclose.addEventListener('click', function () {
    productModal.style.display = 'none';
})




//大卡內數量加減
document.getElementById('btn-plus').addEventListener('click', function () {
    clickCount++;
    countDisplay.innerText = clickCount;
});

document.getElementById('btn-minus').addEventListener('click', function () {
    if (clickCount > 1) {
        clickCount--;
        countDisplay.innerText = clickCount;
    }
});




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
