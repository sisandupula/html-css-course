
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
    const call = document.querySelector('.icon__call')
    const modalCall = document.querySelector('.modal')
    const modalMessage = document.querySelector('.modal__message')
    const body = document.querySelector('body')
    const aside = document.querySelector('.aside')
    const sidebar = document.querySelector('.menu__icon')
    const sidebarClose = document.querySelector('.icon__close')
    const menuButton = document.querySelector('.menu__icon')
    const message = document.querySelector('.icon__chat')
    const menuItems = document.querySelectorAll('.menu__item')

    menuItems.forEach(menuItem => {
        menuItem.addEventListener('click', (e) => {
            menuItems.forEach( (item)=>{
                item.classList.remove('menu__item--active')
            })
            if (e.target === menuItem) {
                e.target.classList.add('menu__item--active')
            }
        })
    })

    sidebar.addEventListener('click', (e) => {
        if (e.target === sidebar) {
            body.style.display = "flex"
            body.style.flexDirection = "row"
            aside.classList.remove('hide')
            aside.classList.add('inline')
            menuButton.classList.add('hide')
        }
    })
    sidebarClose.addEventListener('click', (e) => {
        if (e.target === sidebarClose) {
            body.style.display = "block"
            aside.classList.remove('inline')
            aside.classList.add('hide')
            menuButton.classList.remove('hide')
            menuButton.classList.add('show')
        }
    })
    message.addEventListener('click', (e) => {
            modalMessage.classList.remove('hide')
            modalMessage.classList.add('show')
    })
    body.addEventListener('click', (event) => {
        if (!event.target.classList.contains('mod') && event.target !== message) {
            modalMessage.classList.remove('show')
            modalMessage.classList.add('hide')
        }
    })

    call.addEventListener('click', event => {
        if (event.target == call) {
            modalCall.classList.remove('hide')
            modalCall.classList.add('show')
        }
    })
    body.addEventListener('click', (event) => {
        if (!event.target.classList.contains('mod') && event.target !== call) {
            modalCall.classList.remove('show')
            modalCall.classList.add('hide')
        }
    })


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
