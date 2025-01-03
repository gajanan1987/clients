import React, { useState, useEffect } from "react";
import { userProfile } from "../api/axios.jsx";

function Profile() {
  const [user, setUser] = useState();

  const getUserProfile = async () => {
    try {
      const res = await userProfile();
      setUser(res);
    } catch (error) {
      return error.message;
    }
  };

  // const test = async () => {
  //   try {
  //     const res = await axios.get("http://localhost:3030/api/v1/auth");
  //     console.log("🚀 ~ test ~ res:", res);
  //     const dataown = res.data;
  //     console.log("🚀 ~ studentsown ~ dataown:", dataown);
  //   } catch (error) {
  //     return error.message;
  //   }
  // };

  useEffect(() => {
    // test();
    getUserProfile();
  }, []);

  return (
    <div>
      {user && (
        <>
          <img src={user?.avatar} />
          <p>Name: {user?.name}</p>
          <p>Email: {user?.email}</p>
          <p>Role: {user?.role}</p>
        </>
      )}
    </div>
  );
}

export default Profile;
