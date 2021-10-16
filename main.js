// DOM //

// comando para testar / ex:toggle console.log(toggle)    

// toggles = abre e fecha o menu //
const nav = document.querySelector("#header nav")
const toggle = document.querySelectorAll("nav .toggle")


for (const element of toggle) {
    element.addEventListener("click", function () {
        nav.classList.toggle("show")
    })
}


// eu clicar em um qualquer item do menu fechar o menu //

const links = document.querySelectorAll("nav ul li a")

for (const link of links) {
    link.addEventListener("click", function (){
        nav.classList.remove ("show")
    }
    )

}

// mudança do tabeçario quando se rola para baixo

const header = document.querySelector("#header")
const navHeight = header.offsetHeight
 
function changeHeaderWhenScroll() {
    if(window.scrollY >= navHeight) {
        header.classList.add("scroll")
    } else {
        header.classList.remove("scroll")

    }
}

// Testimonials  -- Swipers

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    keyboard: true,
    mousewheel:true,
    breakpoints: {
     767: {
        slidesPerView: 2,
        setWrapperSize: true
     }
    }
  })

// ScrollReveal : Elementos quando der scroll
const scrollReveal = ScrollReveal({
    origin: "top",
    distance: "30px",
    duration: 750,
    reset: true,

})


scrollReveal.reveal(` 
#home .text, 
#home .image, 
#about .image, 
#about .text, #services .header, 
#services .card, 
#testimonials .header, 
#contact .text, 
#contact .links,
footer .brand,
footer .social`, {interval: 100})


// back to top

const backToTopButton = document.querySelector(".back-to-top")

function backToTop () {
    if (window.scrollY >= 560) {
        backToTopButton.classList.add("show")
    }   else {
        backToTopButton.classList.remove("show")
    }
}




function activateMenuAtCurrentSection () {
    const sections = document.querySelectorAll('main section[id]')

    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

    for (const section of sections) {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const checkpointStart = checkpoint >= sectionTop
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight

        if (checkpointStart && checkpointEnd) {
             document
             .querySelector('nav ul li a[href*="' + sectionId + '"]')
             .classList.add('active')
             
        }
           else {
             document
             .querySelector('nav ul li a[href*="' + sectionId + '"]')
             .classList.remove('active')
        }
    }
}

window.addEventListener("scroll", function () {
    changeHeaderWhenScroll()
    backToTop()
    activateMenuAtCurrentSection ()

})
    
    

