import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [name, setName] = useState(null);

  // const std = async () => {
  //   const response = await axios.get(
  //     "http://localhost:3030/api/v1/student/get/4"
  //   );
  //   const data = response.data.data[0].fname;
  //   setName(data);
  // };

  // useEffect(() => {
  //   std();
  // }, []);

  return (
    <UserContext.Provider value={{ name }}>{children}</UserContext.Provider>
  );
};
