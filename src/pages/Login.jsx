import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contex/Contex";
// import { Button, Box, TextField } from "@mui/material";
import { TextField, Button, Grid, Typography, Box } from "@mui/material";
import { loginStudent, loginUser } from "../api/axios.jsx";

function Login() {
  const [loginRole, setLoginRole] = useState("own");
  const [btnText, setBtnText] = useState("own API");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const { login, setIsOwn } = useAuth();

  const navigation = useNavigate();

  const btnHandler = () => {
    if (btnText === "platzi API") {
      setBtnText("own API");
      setLoginRole("own");
    } else {
      setBtnText("platzi API");
      setLoginRole("platzi");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    // Basic validation
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    setError("");
    if (loginRole === "platzi") {
      getLoginUser();
    } else {
      getLoginStudent();
    }
  };
  // const udata = {
  //   email: "john@mail.com",
  //   password: "changeme",
  // };

  const getLoginUser = async () => {
    try {
      const userData = await loginUser(formData);
      localStorage.setItem("token", JSON.stringify(userData.access_token));
      // localStorage.setItem("ref_token", JSON.stringify(userData.refresh_token));
      login(JSON.stringify(userData.access_token));
      navigation("/profile");
    } catch (error) {
      return error.message;
    }
  };

  const getLoginStudent = async () => {
    setIsOwn(true);
    try {
      const studentsData = await loginStudent(formData);

      if (!studentsData.success) {
        if (studentsData.message === "Invalid email") {
          alert("Email not found. Please try again.");
        } else if (studentsData.message === "Invalid password") {
          alert("Incorrect password. Please try again.");
        } else {
          alert("An error occurred. Please try again later.");
        }
      }
      localStorage.setItem("token", JSON.stringify(studentsData.access_token));
      login(JSON.stringify(studentsData.access_token));
      // navigation("/profile");
    } catch (error) {
      return error.message;
    }
  };

  return (
    <Box>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <Box mb={2}>
        <Button variant="outlined" onClick={() => btnHandler()}>
          {btnText}
        </Button>
      </Box>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Enter your email"
              variant="outlined"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Enter your password"
              variant="outlined"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="success" type="submit">
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
      <p>
        Dont have account <Link to="/register">Register</Link>
      </p>
    </Box>
  );
}

export default Login;
