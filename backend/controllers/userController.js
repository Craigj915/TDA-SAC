const bcrypt = require("bcrypt");
const { User } = require("../models/user");
const createError = require("http-errors");
const saltRounds = 10;
const dayjs = require("dayjs");

exports.register = async (req, res, next) => {
  const { email, password, role, team } = req.body;

  const encryptedPass = await bcrypt.hash(password, saltRounds);

  const today = dayjs().format("DD/MM/YYYY | HH:mm:ss");

  const user = new User({
    email,
    password: encryptedPass,
    lastPasswordChanged: today,
    role,
    team,
    date: today,
    active: true,
  });

  await user.save();

  res.status(201).send({
    message: "User created",
  });
};

exports.status = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Toggle the 'active' field
    if ((user.active = false)) {
      user.active = true;
    } else {
      user.active = false;
    }

    const updatedUser = await user.save();

    return res
      .status(200)
      .json({ message: "User status updated successfully", user: updatedUser });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.update = async (req, res, next) => {
  const { forename, surname, password, username, icon, lastPasswordChanged } =
    req.body;
  const { id } = req.params;

  const encryptedPass = await bcrypt.hash(password, saltRounds);

  try {
    const user = await User.findById(id);

    if (!user) {
      return next(createError(404, "User not found"));
    }

    user.password = encryptedPass;
    user.forename = forename;
    user.surname = surname;
    user.username = username;
    user.icon = icon;
    user.lastPasswordChanged = lastPasswordChanged;

    await user.save();

    res.status(201).send({
      message: "User updated",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      message: "Internal Server Error",
    });
  }
};

exports.remove = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) {
      return next(createError(400, "Bad Request"));
    }

    const removeUser = await User.findByIdAndDelete(id);

    // Check if the user was found and deleted
    if (!removeUser) {
      return res.status(404).send({
        message: "User not found",
      });
    }

    res.send({
      message: "User deleted",
    });
  } catch (err) {
    console.error(err);
    return next(createError(500, "Internal Server Error"));
  }
};

exports.notifications = async (req, res, next) => {
  const { notification } = req.body;
  const { email } = req.params;
  try {
    const user = await User.findByEmail(email);

    if (!user) {
      return next(createError(404, "User not found"));
    }

    user.notifications.push(notification);

    await user.save();

    res.status(201).send({
      message: "User notified",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      message: "Internal Server Error",
    });
  }
};

exports.getUserByToken = async (req, res, next) => {
  const { token } = req.params;

  try {
    const data = await User.findByToken(token);

    if (!data) {
      return next(createError(404, "User not found"));
    }

    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send({
      message: "Internal Server Error",
    });
  }
};
