const slider = document.querySelectorAll('#slider')
const leftIcon = document.querySelector('#left')
const rightIcon = document.querySelector('#right')
let i = 0
leftIcon.addEventListener('click', () => changeSlider(left))
rightIcon.addEventListener('click', () => changeSlider(right))
const changeSlider = (diraction) => {
    if(diraction === left){
        prev()
    }else if(diraction == right){       
        next()
    }

    
}

const next = () => {
    slider.forEach(slide => {
        if(slide.classList.contains('active')){
            slide.classList.remove('active')            
        }
    })
    i++
    if(i > slider.length - 1){
        i = 0
    }
    slider[i].classList.add('active')
    
}

const prev = () => {
    slider.forEach(slide => {
        if(slide.classList.contains('active')){
            slide.classList.remove('active')            
        }
    })
    i--
    if(i < 0){
        i = slider.length - 1
    }
    slider[i].classList.add('active')
}

const interval =  setInterval(() => {
    next()
}, 3000)