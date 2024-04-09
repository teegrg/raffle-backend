const express = require("express");
const users = express.Router();

const {
    getAllUsers,
    getUser,
    createUser
} = require("../queries/users");

users.get('/', async (req, res) => {
    try{
        const allUsers = await getAllUsers();
        res.status(200).json({ data: allUsers });
    }catch(err){
        res.status(500).json({ error: err.message })
    }
});

users.get('/:id', async(req, res) => {
    try{
        const { id } = req.params;
        const user = await getUser(id);
        res.status(200).json({ data: user })
    }catch(err){
        res.status(500).json({ error: err.message})
    }
});

users.post('/', async (req, res) => {
    try{
        const body = req.body;
        const newUser = await createUser(body);
        res.status(201).json({ data: newUser })
    }catch(err){
        res.status(500).json({ error: err.message })
    }
})

module.exports = users;