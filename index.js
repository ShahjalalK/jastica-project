 
const tagsEl = document.getElementById('tags')
const textArea = document.getElementById('textarea')

 textArea.addEventListener('keyup', (e) => {
    createTextArea(e.target.value)
    if(e.key === 'Enter'){
      setTimeout(() => {
        e.target.value = ''
      }, 10)

      randomSelect()
    }
 })

 const createTextArea = (input) => {
     tagsEl.innerHTML = ''
   const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
   tags.forEach(item => {
       const tagEl = document.createElement('span')
       tagEl.className = 'tag'
       tagEl.innerText = item
       tagsEl.appendChild(tagEl)
   })   
 }

 const randomSelect = () => {
   const times = 30
   const interval = setInterval(() => {
     const randamTag = pickRandomTag()
     highLightTag(randamTag)
     setTimeout(() => {
       unHighLightTag(randamTag)
     }, 100)
   }, 100)
   setTimeout(() => {
     clearInterval(interval)
    setTimeout(() => {
      const randamTag = pickRandomTag()
      highLightTag(randamTag)
    }, 100)

   }, times * 100)
 }

 const pickRandomTag = () => {
   const tags = document.querySelectorAll('.tag')
   return tags[Math.floor(Math.random() * tags.length)]   
 }

 const highLightTag = (tag) => {
   tag.classList.add('heighlight')
 }
 const unHighLightTag = (tag) => {
   tag.classList.remove('heighlight')
 }