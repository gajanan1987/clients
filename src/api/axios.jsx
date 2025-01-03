import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_NETLIFY,
});

export const loginStudent = async (formData) => {
  try {
    const res = await api.post(`/v1/auth/login`, formData, {
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    return error;
  }
};

export const studentList = async (formData) => {
  try {
    const res = await api.get(`v1/student/getall`);
    return res.data;
  } catch (error) {
    return error;
  }
};

export const registerStudent = async (formData) => {
  try {
    const res = await api.post(`/v1/auth/register`, formData);
    return res.data;
  } catch (error) {
    return error;
  }
};

export const loginUser = async (formData) => {
  try {
    const res = await axios.post(
      `https://api.escuelajs.co/api/v1/auth/login`,
      formData
    );
    return res.data;
  } catch (error) {
    return error;
  }
};

export const userProfile = async () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const header = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const res = await axios.get(
      `https://api.escuelajs.co/api/v1/auth/profile`,
      header
    );
    return res.data;
  } catch (error) {
    return error;
  }
};
