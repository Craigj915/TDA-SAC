"use client";
import React, { useState, useEffect } from "react";

const getSick = (props) => {
  const [sicks, setSicks] = useState([]);

  const refreshList = () => {
    props.client.getSicks().then((response) => {
        setSicks(response.data);
    });
  };

  const removeSick = (id) => {
    props.client.removeSick(id).then(() => refreshList());
  };

  return <div>GetSick</div>;
};

export default getSick;
