const fetchBtn = document.querySelector(".fetchButton")
const searchDiv = document.querySelector(".search")
const paraDiv = document.querySelector(".para")
const buttonDiv = document.querySelector(".button")
const cars = [
    {
        "color": "purple",
        "type": "minivan",
        "registration": '2017-01-03',
        "capacity": 7
    },

    {
        "color": "red",
        "type": "station wagon",
        "registration": '2018-03-03',
        "capacity": 5
    },

    {
        "color": "blue",
        "type": "sedan",
        "registration": '2019-05-03',
        "capacity": 5
    },

    {
        "color": "green",
        "type": "suv",
        "registration": '2020-07-03',
        "capacity": 7
    },

    {
        "color": "black",
        "type": "crossover",
        "registration": '2022-11-03',
        "capacity": 7
    },

    {
        "color": "army",
        "type": "truck",
        "registration": '2022-11-03',
        "capacity": 10
    }
]


const mainFunc = () => {

    // Main Function - map(), slice() and destructuring concept
    buttonDiv.innerHTML = ''
    let newArr = cars.map((data) => {
        let { color: colorOfCar, capacity: capacityOfCar, type: typeOfCar, registration: dateOfReg } = data
        searchDiv.innerHTML = `<input type="search" class="searchBtn" name="" id="">`
        paraDiv.innerHTML += `
        <div class = "details">
            <p class = "para1">Type of the Car is <span class = "type">${typeOfCar}</span><br>Color of the Car is <span class = "color">${colorOfCar}</span><br>Capacity of the Car is <span class = "capacity">${capacityOfCar}</span> <br>Year of Registration is ${data.registration.slice(0, 4)} <br></p>
            <div class = "delete">Delete Details</div>
        </div
        `
        return { color: colorOfCar, capacity: capacityOfCar, type: typeOfCar.toLowerCase(), yearOfReg: dateOfReg.slice(0, 4) }
    })


    // Delete Function - findIndex() and splice() concept
    const deleteFunc = (btn) => {
        let element = btn.previousElementSibling
        btn.remove()
        element.remove()
        let color = element.querySelector('.color').innerHTML
        let type = element.querySelector('.type').innerHTML
        let capacity = element.querySelector('.capacity').innerHTML
        let obj = {
            "color": color,
            "type": type,
            "capacity": parseInt(capacity)
        }
        let index = cars.findIndex((car) => {
            return car.color == obj.color && car.type == obj.type && car.capacity == obj.capacity
        })
        cars.splice(index, 1)
        newArr.splice(index, 1)
    }


    // Search Function - filter() concept
    const searchFunc = () => {
        paraDiv.innerHTML = ''
        let filteredArr = newArr.filter((data) => {
            return data.type.startsWith(searchBar.value)
        })
        filteredArr.forEach((data) => {
            paraDiv.innerHTML += `
            <div class = "details">
                <p class = "para1">Type of the Car is <span class = "type">${data.type}</span><br>Color of the Car is <span class = "color">${data.color}</span><br>Capacity of the Car is <span class = "capacity">${data.capacity}</span><br>Year of Registration is ${data.yearOfReg}<br></p>
                <div class = "delete">Delete Details</div>
            </div>
            `
        })

        // Delete Function - findIndex() and splice() concept (While Searching)
        const deleteFunc = (btn) => {
            let element = btn.previousElementSibling
            btn.remove()
            element.remove()
            let color = element.querySelector('.color').innerHTML
            let type = element.querySelector('.type').innerHTML
            let capacity = element.querySelector('.capacity').innerHTML
            let obj = {
                "color": color,
                "type": type,
                "capacity": parseInt(capacity)
            }
            let index = cars.findIndex((car) => {
                return car.color == obj.color && car.type == obj.type && car.capacity == obj.capacity
            })
            cars.splice(index, 1)
            newArr.splice(index, 1)
        }
        let delBtn = document.querySelectorAll('.delete')
        delBtn.forEach((btn) => {
            btn.addEventListener('click', () => { deleteFunc(btn) })
        })
    }

    // Delete Button Event
    let delBtn = document.querySelectorAll('.delete')
    delBtn.forEach((btn) => {
        btn.addEventListener('click', () => { deleteFunc(btn) })
    })

    // Search Bar Event
    let searchBar = document.querySelector('.searchBtn')
    searchBar.addEventListener('input', searchFunc)

}

// Main Event
fetchBtn.addEventListener('click', mainFunc)

