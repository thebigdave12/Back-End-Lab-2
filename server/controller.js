const houses = require('./db.json')

let globalId = 4

module.exports = {

    getHouse: (req, res) => {
        res.status(200).send(houses)
    },

    createHouse: (req, res) => {

      let newHouse =  {
            id: globalId,
            address: req.body.address,
            price: +req.body.price,
            imageURL: req.body.imageURL
        }

        houses.push(newHouse)

        res.status(200).send(houses)
    },

    updateHouse: (req, res) => {

        const {type} = req.body
        const {id: paramId} = req.params
        let index = houses.findIndex((house) => house.id === +paramId)

        console.log(houses[index].price)

        if (type === 'minus' && houses[index].price <= 0){
            res.status(400).send('Houses cannot be free')
        }
        else if(type === 'plus' ){
            houses[index].price += 10000
            res.status(200).send(houses)
        }else if(type === 'minus' ){
            houses[index].price -= 10000
            res.status(200).send(houses)
        }


       
    },

    deleteHouse: (req, res) => {
        const {id: paramId} = req.params
        
        let index = houses.findIndex((house) => house.id === +paramId)
        // console.log(houses[index])
        houses.splice(index, 1)

        res.status(200).send(houses)

    }


}