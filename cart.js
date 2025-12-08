let clickProduct = {};
let clickCount = 1;
let BasePrice = 0;   
let optionPrice = 0; 


// 點餐大卡片元素
const productModal = document.getElementById('productModal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalPrice = document.getElementById('modal-price');
const countDisplay = document.getElementById('count-display');
const optionradio = document.getElementById('modal-radio');
const radioInputs = document.querySelectorAll('input[name="orderop"]');



//點擊小卡出現大卡
document.querySelectorAll('.ordercard').forEach(function (card) {
    card.addEventListener("click", function () {
        const name = this.getAttribute('data-name');
        BasePrice = parseInt(this.getAttribute('data-price'));  // 更新全域原價
        const img = this.getAttribute('data-img');
        const category = this.dataset.category; 
        clickProduct = {
            name: name,
            price: BasePrice,
            img: img
        };

        modalTitle.innerText = name;
        modalImg.src = img;

        // 初始化狀態 (數量變回 1，配餐價格變回 0)
        clickCount = 1;
        countDisplay.innerText = clickCount;
        optionPrice = 0; 
        
        radioInputs[0].checked = true;

    
        productModal.style.display = 'flex';


        if (category == 'burger') {
            optionradio.style.display = 'flex';
        } else {
            optionradio.style.display = 'none';
        }

        
        updateModalTotal();
    })
})


//點餐大卡金額更新
function updateModalTotal() {
    const total = (BasePrice + optionPrice) * clickCount;
    modalPrice.innerText = total;
}

radioInputs.forEach(input => {
    input.addEventListener('change', function() {
        optionPrice = parseInt(this.value);
        updateModalTotal();
    });
});


//大卡內數量加減
document.getElementById('btn-plus').addEventListener('click', function () {
    clickCount++;
    countDisplay.innerText = clickCount;
    updateModalTotal();
});

document.getElementById('btn-minus').addEventListener('click', function () {
    if (clickCount > 1) {
        clickCount--;
        countDisplay.innerText = clickCount;
        updateModalTotal();
    }
});



//關掉大卡片
const orderclose = document.querySelectorAll("#ordercloseBtn, #addToCartBtn")

orderclose.forEach(button =>{
     button.addEventListener('click', function () {
   if (this.id === 'addToCartBtn') {
             alert('已加入購物車🍟(๑ᵔ⤙ᵔ๑)🍔');
        }

        // 關閉視窗
        productModal.style.display = 'none';
    });
})

