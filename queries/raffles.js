const db = require("../db/dbConfig.js");

//ALL RAFFLES
const getAllRaffles = async () => {
    return await db.any(`SELECT * FROM raffles;`);
}

//ONE RAFFLE
const getRaffle = async (id) => {
    return await db.oneOrNone(`SELECT * FROM raffles WHERE id=$1;`,id);
}

//POST RAFFLE
const createRaffle = async (raffle) => {
    return await db.oneOrNone(`
        INSERT INTO raffles (name, key, created_at) 
        VALUES 
        ($1, $2, CURRENT_TIMESTAMP)
        RETURNING *;
    `, [raffle.name, raffle.key])
}

//ALL PARTICIPANTS 
const getAllParticipants = async (id) => {
    return await db.manyOrNone(`
    SELECT 
            CONCAT(users.first_name, ' ' ,users.last_name) AS name,
            users.id,
            users.email,
            users.phone
        FROM 
            raffles 
        JOIN 
            users 
        ON 
            raffles.user_id = users.id
        WHERE 
            raffles.id=$1
    `, id)
}

//CREATE PARTICIPANTS
const createParticipant = async (user) => {
    return await db.oneOrNone(
        `INSERT INTO
             users (first_name, last_name, email, phone, created_at) 
         VALUES ($1, $2, $3, $4, CURRENT_TIMESTAMP) 
         RETURNING *;`, 
         [user.first_name, user.last_name, user.email, user.phone]
        );
}


//GET WINNER
const getWinner = async (id) => {
    return await db.any(`SELECT * FROM winner WHERE id=$1;`, id);
}

module.exports = {
    getAllRaffles,
    getRaffle,
    getAllParticipants,
    createParticipant,
    getWinner,
    createRaffle,
};