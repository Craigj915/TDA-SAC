"use client";
import { React, useState, useEffect } from "react";
import dayjs from "dayjs";
import { generateDate, months } from "@/util/calendar";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const CalendarUI = () => {
  const [days, setDays] = useState([]);

  const generateDay = () => {
    const dayArray = [];
    for (let i = 1; i <= 7; i++) {
      dayArray.push(dayjs().day(i).format("dd"));
    }
    setDays(dayArray);
  };

  useEffect(() => {
    generateDay();
  }, []);

  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);

  return (
    <div className="flex gap-10 justify-center items-center p-8">
      <div className="w-fit">
        <div className="flex justify-between items-center select-none">
          <h1>
            {months[today.month()]}, {today.year()}
          </h1>
          <div className="flex gap-2 items-center ">
            <GrFormPrevious
              className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
              onClick={() => {
                setToday(today.month(today.month() - 1));
              }}
            />
            <h1
              className=" cursor-pointer hover:scale-105 transition-all"
              onClick={() => {
                setToday(currentDate);
              }}
            >
              Today
            </h1>
            <GrFormNext
              className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
              onClick={() => {
                setToday(today.month(today.month() + 1));
              }}
            />
          </div>
        </div>
        <div className="grid grid-cols-7 ">
          {days.map((day, index) => {
            return (
              <h1
                key={index}
                className="text-sm text-center h-14 grid place-content-center text-gray-500 select-none"
              >
                {day}
              </h1>
            );
          })}
        </div>

        <div className=" grid grid-cols-7 ">
          {generateDate(today.month(), today.year()).map(
            ({ date, currentMonth, today }, index) => {
              return (
                <div
                  key={index}
                  className="p-2 text-center h-14 grid place-content-center text-sm border-t"
                >
                  {currentMonth ? (
                    today ? (
                      <button
                      className="text-black border-2 h-10 w-10 rounded-xl grid place-content-center hover:border-2 focus:border-red-500 border-gray-500 hover:scale-110 transition-all cursor-pointer select-none"
                      onClick={() => {
                        setSelectDate(date);
                      }}
                    >
                      {date.date()}
                    </button>
                    ) : (
                      <button
                      className="text-black h-10 w-10 rounded-xl grid place-content-center hover:border-2 focus:border-2 focus:border-red-500 border-gray-500 hover:scale-110 transition-all cursor-pointer select-none"
                      onClick={() => {
                        setSelectDate(date);
                      }}
                    >
                      {date.date()}
                    </button>
                    )
                    
                  ) : (
                    <button
                      className="text-gray-300 h-10 w-10 rounded-xl grid place-content-center hover:border-2 focus:border-2 focus:border-red-500 border-gray-500 hover:scale-110 transition-all cursor-pointer select-none"
                      onClick={() => {
                        setSelectDate(date);
                      }}
                    >
                      {date.date()}
                    </button>
                  )}
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default CalendarUI;
