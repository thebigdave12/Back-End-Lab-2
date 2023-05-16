// const housesContainer = document.querySelector('#houses-container')
// const form = document.querySelector('form')

// const baseURL = `http://localhost:4004/api/houses`

// const housesCallback = ({ data: houses }) => displayHouses(houses)
// const errCallback = err => console.log(err)

// const getAllHouses = () => axios.get(baseURL).then(housesCallback).catch(errCallback)
// const createHouse = body => axios.post(baseURL, body).then(housesCallback).catch(errCallback)
// const deleteHouse = id => axios.delete(`${baseURL}/${id}`).then(housesCallback).catch(errCallback)
// const updateHouse = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(housesCallback).catch(errCallback)

// function submitHandler(e) {
//     e.preventDefault()

//     let address = document.querySelector('#address')
//     let price = document.querySelector('#price')
//     let imageURL = document.querySelector('#img')

//     let bodyObj = {
//         address: address.value,
//         price: price.value, 
//         imageURL: imageURL.value
//     }

//     createHouse(bodyObj)

//     address.value = ''
//     price.value = ''
//     imageURL.value = ''
// }

// function createHouseCard(house) {
//     const houseCard = document.createElement('div')
//     houseCard.classList.add('house-card')

//     houseCard.innerHTML = `<img alt='house cover image' src=${house.imageURL} class="house-cover-image"/>
//     <p class="address">${house.address}</p>
//     <div class="btns-container">
//         <button onclick="updateHouse(${house.id}, 'minus')">-</button>
//         <p class="house-price">$${house.price}</p>
//         <button onclick="updateHouse(${house.id}, 'plus')">+</button>
//     </div>
//     <button onclick="deleteHouse(${house.id})">delete</button>
//     `


//     housesContainer.appendChild(houseCard)
// }

// function displayHouses(arr) {
//     housesContainer.innerHTML = ``
//     for (let i = 0; i < arr.length; i++) {
//         createHouseCard(arr[i])
//     }
// }

// form.addEventListener('submit', submitHandler)

// getAllHouses()

const form = document.querySelector('form')

const baseURL = `http://localhost:4004/api/houses`


const getAllHouses = () => {
    axios.get(baseURL)
        .then((res) => {
            displayHouses(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
}

const deleteHouse = (id) => {
    axios.delete(`${baseURL}/${id}`)
        .then((res) => {
            displayHouses(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
}

const updateHouse = (id, type) => {
    axios.put(`${baseURL}/${id}`, {type})
        .then((res) => {
            displayHouses(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
}

const createHouse = (body) => {
    axios.post(baseURL, body)
        .then((res) => {
            displayHouses(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
}

const submitHandler = (e) => {
    e.preventDefault()

    let address = document.querySelector('#address')
    let price = document.querySelector('#price')
    let imageURL = document.querySelector('#img')

    let bodyObj = {
        address: address.value,
        price: price.value, 
        imageURL: imageURL.value
    }

    createHouse(bodyObj)

    address.value = ''
    price.value = ''
    imageURL.value = ''
}

const createHouseCard = (house) => {
    // locate section on HTML where we will be putting our movie card
    const housesContainer = document.querySelector('#houses-container')

    // Create a new HTML div element
    const houseCard = document.createElement('div')

    // Add the house-card class to the houseCard div we just created. This is mainly just for styling.
    houseCard.classList.add('house-card')

    // Define which additional HTML elements need to exist inside our houseCard div
    houseCard.innerHTML = `
    <img alt='house cover image' src=${house.imageURL} class="house-cover-image"/>
    <p class="address">${house.address}</p>
    <div class="btns-container">
        <button onclick="updateHouse(${house.id}, 'minus')">-</button>
        <p class="house-price">$${house.price}</p>
        <button onclick="updateHouse(${house.id}, 'plus')">+</button>
    </div>
    <button onclick="deleteHouse(${house.id})">delete</button>
    `

    // Attach the houseCard div (with all of it's nested elements) to the housesContainer on our HTML
    housesContainer.appendChild(houseCard)
}

const displayHouses = (arr) => {
    const housesContainer = document.querySelector('#houses-container')

    housesContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createHouseCard(arr[i])
    }
}

form.addEventListener('submit', submitHandler)

getAllHouses()