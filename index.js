const iconBox = document.querySelectorAll('.iconBox')
const contentBox = document.querySelectorAll('.contentBox')

iconBox.forEach((icon) => {
    icon.addEventListener('mouseover', () => {
      
        contentBox.forEach((box) => {
            box.className = 'contentBox'
        })
        document.getElementById(icon.dataset.id).className = 'contentBox active'
       iconBox.forEach((i) => {
           i.className = 'iconBox'
       })
       icon.className = 'iconBox active'
    })
})