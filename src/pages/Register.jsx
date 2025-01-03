import React, { useState, useEffect } from "react";
import { TextField, Button, Grid, Typography, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { registerStudent } from "../api/axios.jsx";

const Register = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    mobile: "",
    gender: "",
    state: "",
    address: "",
  });
  const [error, setError] = useState("");
  const navigation = useNavigate();

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
    postStudent();
  };

  const postStudent = async () => {
    try {
      const res = await registerStudent(formData);
      console.log("🚀 ~ postStudent ~ res:", res);
      if (res.success) {
        navigation("/login");
      }
    } catch (error) {
      return error.message;
    }
  };

  return (
    <Box>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Enter your first name"
              variant="outlined"
              type="text"
              name="fname"
              value={formData.fname}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Enter your last name"
              variant="outlined"
              type="text"
              name="lname"
              value={formData.lname}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Enter your email"
              variant="outlined"
              type="email"
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
            <TextField
              label="Enter your mobile"
              variant="outlined"
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Enter your gender"
              variant="outlined"
              type="text"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Enter your State"
              variant="outlined"
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Enter your address"
              variant="outlined"
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="success" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
      <Box mt={2}>
        you have account <Link to="/login">Login</Link>
      </Box>
    </Box>
  );
};

export default Register;
