
document.getElementById('swiper-container').style.height = window.innerHeight+'px';
document.getElementById('swiper-container').style.width = window.width+'px';

document.getElementById('swiper-container2').style.height = window.innerHeight+'px';
document.getElementById('swiper-container2').style.width = window.width+'px';

let mySwiper = new Swiper('#swiper-container',{
  direction : 'vertical',
  lazyLoading : true,
  lazyLoadingInPrevNext : true,
  loop : false,

  on: {
    init: function(){
      swiperAnimateCache(this)
      swiperAnimate(this)
    },
    slideChangeTransitionEnd: function(){
      swiperAnimate(this)
    },
  },
})

let yourSwiper = new Swiper('#swiper-container2',{
  direction : 'vertical',
  loop : false,
  effect : 'fade',
  nested : true,

  on: {
    init: function(){
      swiperAnimateCache(this)
      swiperAnimate(this)
    },
    slideChangeTransitionEnd: function(){
      swiperAnimate(this)
    },
  },
})
