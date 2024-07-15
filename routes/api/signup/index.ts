import axios from "axios";

interface registerUserProps {
  email: string;
  password: string;
  role: string;
}

const registerUser = async (data: registerUserProps) => {
  const { email, password, role } = data;
  try {
    const response = await axios.post("/api/auth/register", {
      email,
      password,
      role,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Internal server error");
  }
};

export default registerUser;
