// create a div with a photo
const wind = document.createElement('div')
wind.classList.add('wind')
document.body.prepend(wind)

const arrData = [
    {   src: 'https://klike.net/uploads/posts/2020-08/1597127429_5.jpg',
        alt: 'alt',
        text: 'text',
    },
    {   src: 'https://klike.net/uploads/posts/2020-08/1597127429_5.jpg',
        alt: 'alt',
        text: 'text',
    },
    {   src: 'https://klike.net/uploads/posts/2020-08/1597127429_5.jpg',
        alt: 'alt',
        text: 'text',
    },
    {   src: 'https://klike.net/uploads/posts/2020-08/1597127429_5.jpg',
        alt: 'alt',
        text: 'text',
    },
]

arrData.forEach(createCard)

function createCard(card) {
    const photo = document.createElement('div')
    photo.classList.add('photo')
    photo.innerHTML = 
    `<img src="${card.src}" alt="${card.alt}">
    <p>${card.text}</p>`
    wind.append(photo)
    photo.addEventListener('click', watch)
     return photo
}

function watch(e) {
    console.log(e.currentTarget)
}


// create a modal window
// create a function that inserts the selected photo into the modal window