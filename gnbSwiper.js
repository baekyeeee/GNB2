//首頁菜單swiper
const swiper = new Swiper(".mySwiper", {

  effect: "coverflow",
  grabCursor: true,      
  centeredSlides: true,  
  loop: true,           

  
  slidesPerView: "3", 

  
  coverflowEffect: {
     rotate: 0,      
    stretch: 0,     
    depth: 120,     
    modifier: 1,    
    scale: 0.7,   
    slideShadows: false, 
  },

  // 箭頭
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
                0: {
                    slidesPerView: 1,
                    coverflowEffect: {
                        depth: 100, 
                    }
                },
               
                768: {
                    slidesPerView: 3, 
                }
            }
})