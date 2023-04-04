const Navbar = {
    init: function () {
        this.cacheSelectors();
        this.bindEvents();
    },
    cacheSelectors: function () {
        this.nav = document.querySelector(`.nav`)
    },
    bindEvents: function () {
        window.addEventListener(`scroll`, this.Events.fixNav.bind(this))
        window.addEventListener('load', this.Events.fixNav.bind(this))
    },
    Events: {
        fixNav: function () {
            if (window.scrollY > this.nav.offsetHeight + 150) {
                this.nav.classList.add(`active`)
            } else {
                this.nav.classList.remove(`active`)
            }
        }
    }
}
Navbar.init()

const ScrollTo = {
    init: function () {
        this.cacheSelectors();
        this.bindEvents();
    },
    cacheSelectors: function () {
        this.homepage = document.querySelector(`.logo`)
        this.lis = document.querySelectorAll('li')
    },
    bindEvents: function () {
        this.homepage.addEventListener(`click`, () => {
            this.Events.removeClassCurrent.bind(this)()
            this.lis[0].classList.add('current')
            window.scrollTo({
                top: document.getElementById('Home').offsetTop,
                behavior: 'smooth'
            })
        })
        this.lis.forEach(li => {
            li.addEventListener('click', this.Events.removeClassCurrent.bind(this))
            li.onclick = () => {
                li.classList.add('current')
                const scroll = document.getElementById(`${li.textContent}`)
                window.scrollTo({
                    top: scroll.offsetTop,
                    behavior: 'smooth'
                })
            }
        })
    },
    Events:{
        removeClassCurrent: function(){
            this.lis.forEach(li=>li.classList.remove('current'))
        }
    }
}
ScrollTo.init()