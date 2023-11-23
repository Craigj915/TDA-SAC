const createError = require("http-errors");
const dayjs = require("dayjs");
const { Holiday } = require("../models/holiday");

exports.register = async (req, res, next) => {
  const { title, userid, email, startDate, endDate, colour, note } = req.body;

  const date1 = dayjs(startDate);
  const date2 = dayjs(endDate);

  const daysDifference = date2.diff(date1, 'day');

  // Function to check if a given date is a weekend (Saturday or Sunday)
  const isWeekend = (date) => {
    const dayOfWeek = date.day();
    return dayOfWeek === 0 || dayOfWeek === 6;
    
  };

  // Filter out weekends between startDate and endDate
  const filteredDates = [];
  for (let i = 0; i <= daysDifference; i++) {
    const currentDate = date1.add(i, 'day');
    
    if (!isWeekend(currentDate)) {
      filteredDates.push(currentDate.format('YYYY-MM-DD'));
    }
  }

  const totalLeave = 28;
  console.log(date1.format('YYYY-MM-DD'));
  console.log(date2.format('YYYY-MM-DD'));
  console.log(daysDifference, "with weekends");
  console.log(filteredDates.length, "No weekends");

  const totalDays = filteredDates.length;
  const remaining = totalLeave - totalDays;

  const holiday = new Holiday({
    title,
    userid,
    email,
    startDate,
    endDate,
    totalDays,
    colour,
    note,
    remaining,
    approved: false,
  });

  await holiday.save();

  res.status(201).send({
    message: "Created Holiday Request",
  });
};

exports.update = async (req, res, next) => {
  const { id } = req.params;
  try {
    const holiday = await Holiday.findById(id);

    if (!holiday) {
      return next(createError(404, "Holiday not found"));
    }

    holiday.approved = true;

    await holiday.save();

    res.status(201).send({
      message: "Holiday updated",
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

    const removeHoliday = await Holiday.findByIdAndDelete(id);

    if (!removeHoliday) {
      return res.status(404).send({
        message: "Holiday not found",
      });
    }

    res.send({
      message: "Holiday deleted",
    });
  } catch (err) {
    console.error(err);
    return next(createError(500, "Internal Server Error"));
  }
};