// Step 1: Import my packages
const express = require('express')
const cors = require('cors')

// Step 2: Setup an instance of Express application
const app = express()


// Step 3: Setup middleware (helps with communication between front and backend)
app.use(express.json())
app.use(cors())

// Step 4: Setup a place for our endpoints
const {getHouse, createHouse, updateHouse, deleteHouse} = require('./controller')

app.get('/api/houses', getHouse)
app.post('/api/houses', createHouse)
app.put('/api/houses/:id', updateHouse)
app.delete('/api/houses/:id', deleteHouse)



//Step 5: Open Server Port to allow data transfers 
app.listen(4004, () => console.log('All houses running on port 4004'))