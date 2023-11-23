const { Team } = require("../models/team");
const dayjs = require("dayjs");
const createError = require("http-errors");

exports.register = async (req, res, next) => {
  const { name, manager } = req.body;
  const today = dayjs().format("DD/MM/YYYY | HH:mm:ss");

  try {
    const team = new Team({
      name,
      manager,
      date: today,
      active: true,
    });

    await team.save();

    res.status(201).send({
      message: "Team created",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      message: "Internal Server Error",
    });
  }
};

exports.update = async (req, res, next) => {
  const { id } = req.params;
  const { newMembers } = req.body;
  try {
    if (!id) {
      return next(createError(400, "Bad Request"));
    }

    const team = await Team.findById(id);

    if (!team) {
      return res.status(404).send({
        message: "Team not found",
      });
    }

    team.members.push(newMembers);

    await team.save();

    console.log("Team members updated successfully");

    res.send({
      message: "Team updated",
      updatedTeam: team,
    });
  } catch (err) {
    console.error(err);
    return next(createError(500, "Internal Server Error"));
  }
};

exports.remove = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) {
      return next(createError(400, "Bad Request"));
    }

    const removeTeam = await Team.findByIdAndDelete(id);

    if (!removeTeam) {
      return res.status(404).send({
        message: "Team not found",
      });
    }

    res.send({
      message: "Team deleted",
    });
  } catch (err) {
    console.error(err);
    return next(createError(500, "Internal Server Error"));
  }
};
