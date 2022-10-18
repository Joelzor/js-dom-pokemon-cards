
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);

function capitalize (string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

function createCard (liCard) {
    const ul = document.querySelector('ul')
    liCard.setAttribute('class', 'card')
    ul.appendChild(liCard)
}

function createTitle (i, liCard) {
    console.log(`Inside createTitle fuction, i is currently ${i}`)
    const title = document.createElement('h2')
    title.innerText = (capitalize(data[i].name))
    title.classList.add('card--title')
    liCard.appendChild(title)
}

function createImage (i, liCard) {
    const image = document.createElement('img')
    image.src = data[i].sprites.other['official-artwork'].front_default    
    image.setAttribute('width', '256')
    image.classList.add('card--img')
    liCard.appendChild(image)
}

function createCardText (i, liCard) {
    const ul = document.createElement('ul')
    ul.classList.add('card--text')
    data[i].stats.forEach(item => {
        const liStat = document.createElement('li')
        liStat.innerText = `${item.stat.name.toUpperCase()}: ${item.base_stat}`
        ul.appendChild(liStat)
    })
    liCard.appendChild(ul)
}

data.forEach((pokemonCard, i) => {
    const liCard = document.createElement('li')
    createCard (liCard)
    createTitle(i, liCard)
    createImage(i, liCard)
    createCardText(i, liCard)
})

