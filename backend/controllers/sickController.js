
const { Sick } = require("../models/sick");
const createError = require("http-errors");
const dayjs = require("dayjs");

exports.register = async (req, res, next) => {
  const { title, userid, email, colour, note } = req.body;

  const sick = new Sick({
    title,
    userid,
    email,
    startDate: dayjs().format("DD/MM/YYYY | HH:mm:ss"),
    colour,
    note,
  });

  await sick.save();

  res.status(201).send({
    message: "Created Sick Note",
  });
};