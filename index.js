const result = document.getElementById('result')
const filter = document.getElementById('filter')
const listItems = []

getData()
filter.addEventListener('input', (e) => {
    filterData(e.target.value)
})
async function getData(){
    const res = await fetch('https://randomuser.me/api?results=1000')
    const {results} = await res.json()

    results.forEach(user => {
        const li = document.createElement('li')
        listItems.push(li)
        li.innerHTML = `
        <img src="${user.picture.large}" alt="${user.name.first}">
        <div class="user-info">
            <h4>${user.name.first} ${user.name.last}</h4>
            <p>${user.location.city}, ${user.location.country}</p>
        </div>
        `
        result.appendChild(li)
    })
}

const filterData = (searchTerm) => {
    listItems.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())){
            item.classList.remove('hide')
        }else{
            item.classList.add('hide')
        }
    })
}














//  <li>
//         <img src="https://randomuser.me/api/portraits/women/33.jpg" alt="Sara">
//         <div class="user-info">
//           <h4>Sara Smith</h4>
//           <p>Wexford, Ireland</p>
//         </div>
//       </li>