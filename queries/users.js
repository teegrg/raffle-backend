const db = require("../db/dbConfig.js");

//ALL USERS
const getAllUsers = async () => {
    return await db.any(`SELECT * FROM users;`);
}

//ONE USER
const getUser = async (id) => {
    return await db.one(`SELECT * FROM users WHERE id=$1;`,id);
}

//CREATE
const createUser = async (user) => {
    const newUser = await db.one(`INSERT INTO users(first_name, last_name, email, phone, created_at) VALUES ($1, $2, $3, $4, $5) RETURNING *;`, [user.first_name, user.last_name, user.email, user.phone, user.created_at]);
    return newUser;
}

module.exports = {
    getAllUsers,
    getUser,
    createUser
};