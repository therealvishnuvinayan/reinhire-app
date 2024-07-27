import axios from 'axios';

interface registerUserProps {
  email: string;
  password: string;
}

const registerUser = async (data: registerUserProps) => {
  const { email, password } = data;

  try {
    const response = await axios.post('/api/auth/register', {
      email,
      password,
    });

    return response.data;
  } catch (error) {
    throw new Error('Internal server error');
  }
};

export default registerUser;
