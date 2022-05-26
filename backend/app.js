const express = require('express');
const { TeamMember } = require('./model');

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.get('/team', async (req, res, next) => {
  const team = await TeamMember.findAll();
  return res.json(team);
});

app.post('/new-team', async (req, res, next) => {
  const newTeam = new TeamMember({
    ...req.body
  });
  await newTeam.save();
  return res.json({success: true});
});

module.exports = app;
