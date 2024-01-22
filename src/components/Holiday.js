import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleHoliday from "./SingleHoliday";
import Loader from "./Loader";
const url = "https://react--course-api.herokuapp.com/api/v1/data/vacanze";

const Holiday = () => {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(1);

  const nextHoliday = () => {
    if (selected + 1 === data.data.length) {
      setSelected(0);
    } else {
      setSelected(selected + 1);
    }
  };

  const prevHoliday = () => {
    if (selected - 1 < 0) {
      setSelected(data.data.length);
    } else {
      setSelected(selected - 1);
    }
  };

  const getData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
    console.log(data.data);
  }, []);

  return (
    <>
      {data.success ? (
        <SingleHoliday
          {...data.data[selected]}
          next={nextHoliday}
          prev={prevHoliday}
        />
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Holiday;
