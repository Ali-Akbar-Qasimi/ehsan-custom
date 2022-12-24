let burger = document.querySelector('.burger')
let nav = document.querySelector('.nav')
burger.addEventListener('click', () => {
    nav.classList.toggle('show')
})

let links = document.querySelectorAll('ul li')

links.forEach(link=>{
    link.addEventListener('click',close)
})
function close(){
    nav.classList.remove('show')
}
//nav.addEventListener('click',close)


let needToObserve = document.querySelectorAll('.need-to-observe')

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add(entry.target.dataset.animate)
        }
    })
}, {
    threshold: 0.5,
})
needToObserve.forEach((elem) => {
    observer.observe(elem)
})



let count = 1
let shoeImage = document.querySelector('.shoe')
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')
next.addEventListener('click', () => {
    if (count === 9) {
        count = 1
    }
    count += 1
    shoeImage.src = `./images/shoeImages/${count}.png`
})

prev.addEventListener('click', () => {
    if (count === 1) {
        count = 9
    }
    count -= 1
    shoeImage.src = `./images/shoeImages/${count}.png`
})



let servicesData = [
    {
        title: 'Bring your own',
        body: 'molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fug praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem. Veritatisbcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam'
    },
    {
        title: 'I Will Buy',
        body: 'molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fug praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem. Veritatisbcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam'
    },
    {
        title: 'Give your idea',
        body: 'molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fug praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem. Veritatisbcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam'
    },
    {
        title: 'take my idea',
        body: 'molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fug praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem. Veritatisbcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam'
    },
]


let servicesTitle = document.querySelector('.services-content-title')
let servicesBody = document.querySelector('.services-content-body')
let tabs = document.querySelectorAll('.tab')
tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        tab.classList.add('active')
        servicesBody.innerHTML = servicesData[index].body
        servicesTitle.innerHTML = servicesData[index].title

    })
})