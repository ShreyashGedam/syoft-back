const mongoose = require('mongoose')

const connection = mongoose.connect("mongodb+srv://ShreyashGedam:shreyashgedam@cluster0.ioawy.mongodb.net/?retryWrites=true&w=majority")

module.exports = connection