const { getRaffle } = require("../queries/raffles");

const validId = (req, res, next) => {
  const { id } = req.params;
  if (!Number.isInteger(Number(id)) || Number(id) < 1) {
    return res
      .status(400)
      .json({ error: `id param ${id} must be positive integer;` });
  } else {
    next();
  }
};

const idExist = async (req, res, next) => {
  const { id } = req.params;
  const raffle = await getRaffle(id);
  if (!raffle) {
    return res.status(400).json({ error: `id param ${id} doesnot exist;` });
  } else {
    next();
  }
};

const registar_input_field = ["first_name", "last_name", "email"];

const validInput = (req, res, next) => {
  const registar = req.body;

  for (let field of registar_input_field) {

        if (typeof registar[field] !== "string") {
        return res
            .status(400)
            .json({
            error: `${field} field missing or wrong data type, recived ${registar[field]}`,
            });
        }

        if (registar[field].length === 0) {
        return res.status(400).json({ error: `${field} cannot be empty` });
        }
    }

   for(let field in registar){
    if(field !== "phone" && field !== "raffle_id" && !registar_input_field.includes(field)){
        return res.status(400).json({ error: `${field} is not allowed. Please fill in the only required fields.`})
    }
   } 
   next()
};


module.exports = {
    validId,
    idExist,
    validInput
}