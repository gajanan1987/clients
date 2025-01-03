import axios from "axios";
import React, { useState, useEffect } from "react";

export const Userlisting = () => {
  const [data, setData] = useState([]);

  const students = async () => {
    const res = await axios.get(
      `http://localhost:8888/.netlify/functions/api/v1/student/getall`
    );
    const rdata = res.data.data;
    setData(rdata);
  };

  useEffect(() => {
    students();
  }, []);

  return (
    <div className="userlist-page">
      {data?.map((item) => {
        return <h1 key={item.id}>{item.fname}</h1>;
      })}
    </div>
  );
};
