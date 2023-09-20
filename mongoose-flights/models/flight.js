const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({ 
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN', 'JFK']
    },
    arrival: {
        type: Date
    }
});

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American Airlines', 'Southwest Airlines', 'United Airlines', 'Singapore Airlines']
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN', 'JFK']
    },
    flightNo: {
        type:Number,
        min: 10,
        max:9999
    },
    departs: {
        type: Date,
        min: Date.now()
    },
    destinations: {
      type: [destinationSchema]
    }
}, {
   
});

module.exports = mongoose.model('Flight', flightSchema)