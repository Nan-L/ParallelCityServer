const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
// 1. create the event schema
// 2. add event routes handler
const Event = mongoose.model("events");

module.exports = (app) => {
  app.post("/api/events", requireLogin, async (req, res) => {
    const {eventTitle, eventDesc} = req.body;
    const event = new Event({
      title: eventTitle,
      //author: author,
      desc: eventDesc,
     // voters: voters.split(',').map(nickname => {return {nickname: nickname.trim()}}),
      _user: req.user.id
    });
    try {
      await event.save();
      // update user model
      const user = await req.user.save();
      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });

  app.get("/api/events", requireLogin, async (req, res) => {
    const events = await Event.find({_user: req.user.id});
    res.send(events);
  });

  app.get('/api/events/voted', (req, res) => {
    res.send('Thank you for voting!');
  })


};