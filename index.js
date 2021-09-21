const cardHeader = document.querySelector('#header')
const title = document.querySelector('#title')
const excerpt = document.querySelector('#excerpt')
const profileImg = document.querySelector('#profile_img')
const name = document.querySelector('#name')
const date = document.querySelector('#date')

const animatedBg = document.querySelectorAll('.animated-bg')
const animatedBgText = document.querySelectorAll('.animated-bg-text')

const getData = () => {
    cardHeader.innerHTML = `
    <img
    src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    alt="">
    `
    title.innerHTML = `Lorem ipsum dolor sit amet.`
    excerpt.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, officiis?`
    profileImg.innerHTML = `<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">`
    name.innerHTML = `Jhone Doe`
    date.innerHTML = 'Oct 08, 2020'
    animatedBg.forEach(bg => bg.classList.remove('animated-bg'))
    animatedBgText.forEach(bgText => bgText.classList.remove('animated-bg-text'))
}

setTimeout(() => {
    getData()
}, 5000)

console.log(date)
