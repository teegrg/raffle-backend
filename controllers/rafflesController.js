const express = require("express");
const raffles = express.Router();

const {
    getAllRaffles,
    getRaffle,
    getAllParticipants,
    createParticipant,
    getWinner,
    createRaffle,
} = require('../queries/raffles');

const {
    validId,
    idExist,
    validInput
} = require('../Middleware/middleware');

raffles.get('/', async (req, res) => {
    try{
        const allRaffles = await getAllRaffles();
        res.status(200).json({ data: allRaffles });
    }catch(err){
        res.status(500).json({ error: err.message });
    }
});

raffles.post(`/`, async (req, res) => {
    try{
        const { name, key } = req.body;
        const newRaffle = await createRaffle({name, key});
        res.status(201).json({ data: newRaffle })
    }catch(err){
        res.status(500).json({ error: err.mesasge})
    }
})

raffles.get('/:id', validId, idExist, async (req, res) => {
    try{
        const { id } = req.params;
        const oneRaffle = await getRaffle(id);
        res.status(200).json({ data: oneRaffle });
    }catch(err){
        res.status(500).json({ error: err.message });
    }
});

raffles.get('/:id/participants', validId, idExist, async (req, res) => {
    try{
        const { id } = req.params;
        const allParticipants = await getAllParticipants(id);
        res.status(200).json({ data: allParticipants });
    }catch(err){
        res.status(500).json({ error: err.message });
    }
});


raffles.post('/:id/participants',validId, idExist, validInput, async (req, res) => {
    try {
        const { first_name, last_name, email, phone } = req.body;
        const newParticipant = await createParticipant({ first_name, last_name, email, phone });
        res.status(201).json({ data: newParticipant });
    } catch(err) {
        res.status(500).json({ error: err.message });
    }
});

raffles.get('/:id/winner',validId, idExist, async (req, res) => {
    try {
        const { id } = req.params;
        const oneWinner = await getWinner(id);
        res.status(200).json({ data: oneWinner });
    }catch(err){
        res.status(500).json({ errro: err.mesasge });
    }
});

module.exports = raffles;
