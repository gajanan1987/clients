import React, { useState, useEffect } from "react";
import { studentList } from "../api/axios";

export const StudentList = () => {
  const [data, setData] = useState([]);

  const students = async () => {
    const res = await studentList();
    console.log("🚀 ~ students ~ rdata:", res);
    setData(res.data);
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
