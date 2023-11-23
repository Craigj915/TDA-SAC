const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const bcrypt = require("bcrypt");
require("dotenv").config();
const createError = require("http-errors");
const { User } = require("./models/user");
const { Team } = require("./models/team");
const { Holiday } = require("./models/holiday");
const { Sick } = require("./models/sick");
const { v4: uuidv4 } = require("uuid");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/userRoutes");
const teamRoutes = require("./routes/teamRoutes");
const sickRoutes = require("./routes/sickRoutes");
const holidayRoutes = require("./routes/holidayRoutes");

const port = 3001;

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(morgan("dev"));
app.use(helmet());

//   async function checkUser(username, password) {
//     //... fetch user from a db etc.

//

//     if(match) {
//         //login
//     }

//     //...
// }

app.post('/auth', async (req, res) => {
  console.log('arrived');
  console.log(req.body);

  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.sendStatus(401);
    }

    // Compare the provided password with the hashed password stored in the database
    const passwordMatch = await bcrypt.compare(req.body.password, user.password);

    if (!passwordMatch) {
      return res.sendStatus(403);
    }

    // If the password is correct, generate a new token and save it to the user
    user.token = uuidv4();
    await user.save();

    res.send({ token: user.token, role: user.role });
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.get("/", async (_, res, next) => {
  try {
    const users = await User.find();
    const userEmails = users.map((user) => user.email);

    // Render an HTML page with the user emails
    const html = `
        <html>
          <head>
            <title>User Emails</title>
          </head>
          <body>
            <h1>User Emails</h1>
            <ul>
              ${userEmails.map((email) => `<li>${email}</li>`).join("")}
            </ul>
          </body>
        </html>
      `;

    res.send(html);
  } catch (err) {
    return next(createError(500, "Internal Server Error"));
  }
});

//User Section
app.use("/user", userRoutes);
app.get("/users", async (_, res, next) => {
  try {
    const data = await User.find();
    res.send(data);
  } catch (err) {
    return next(createError(500, "Internal Server Error"));
  }
});

//Team Section
app.use("/team", teamRoutes);
app.get("/teams", async (_, res, next) => {
  try {
    const data = await Team.find();
    res.send(data);
  } catch (err) {
    return next(createError(500, "Internal Server Error"));
  }
});
app.get("/teams/:id", async (req, res, next) => {
  const teamId = req.params.id;

  try {
    const team = await Team.findById(teamId);

    if (!team) {
      return next(createError(404, "Team not found"));
    }

    res.send(team);
  } catch (err) {
    return next(createError(500, "Internal Server Error"));
  }
});

//Sick Section
app.use("/sick", sickRoutes);
app.get("/sicks", async (_, res, next) => {
  try {
    const data = await Sick.find();
    res.send(data);
  } catch (err) {
    return next(createError(500, "Internal Server Error"));
  }
});

//Holiday Section
app.use("/holiday", holidayRoutes);
app.get("/holidays", async (_, res, next) => {
  try {
    const data = await Holiday.find();
    res.send(data);
  } catch (err) {
    return next(createError(500, "Internal Server Error"));
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
