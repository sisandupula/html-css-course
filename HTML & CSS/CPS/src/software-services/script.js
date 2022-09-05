
document.addEventListener('DOMContentLoaded', () => {
    if(window.innerWidth < 501){
        new Swiper('.swiper', {
            mousewheel: {
                invert: true,
                sensitivity: 2
            },
            spaceBetween: -10,
            slidesPerView: "auto",
            pagination: {
              el: ".swiper-pagination",
              clickable: true
            }
        })
    }
    const brands = document.querySelectorAll('.brands__item') 
    const showMore = document.querySelector('.show-more')

    showMore.addEventListener("click", (event) => {
        if (event.target === showMore){
            let showMoreIcon = event.target.previousElementSibling
            showMoreIcon.classList.toggle('transform')
            
            brands.forEach(brand => {
                if (brand.classList.contains('large-size')) {
                    brand.classList.toggle('hidden')
                }
                if(brand.classList.contains('med-size')){
                    brand.classList.toggle('active')
                }
            })

            if (showMore.textContent === 'Скрыть'){
                showMore.innerHTML = 'Показать все'
            } else{
                showMore.innerHTML = 'Скрыть'
            }

        }
    })
})
