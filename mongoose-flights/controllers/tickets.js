const Flight = require("../models/flight");
const Ticket = require("../models/ticket");
  
async function newTicket(req, res) {
    const flight = await Flight.findById(req.params.id);
    const ticket = await Ticket.find({}).sort('seat');
    res.render('tickets/new', { title: 'Add Ticket', ticket, flight });
};
  
async function create(req, res) {
    const flight = await Flight.findById(req.params.id);
    req.body.flight = req.params.id
    try {
      await Ticket.create(req.body);
    } catch (err) {
      console.log(err);
    }
    res.redirect(`/flights/${flight._id}`);
};

async function showTicket(req, res) {
    const ticket = await Ticket.findById(req.params.id);
    ticket.flight.push(req.body.flightId);
    await ticket.save();
    res.redirect(`/flights/${flight._id}`);
};

module.exports = {
    new: newTicket,
    create,
    showTicket,
};