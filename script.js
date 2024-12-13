document.querySelector(".fa-bars").addEventListener('click', ()=> {
    document.querySelector(".navbar").classList.toggle("active");
    console.log("gggg")
})

let changeIcon = function(icon){
    icon.classList.toggle('fa-times');
}
function videoUrl(hmmmm){
    document.getElementById("slider").src = hmmmm;
}

var swiper = new Swiper(".product-row", {
    spaceBetween: 30,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
