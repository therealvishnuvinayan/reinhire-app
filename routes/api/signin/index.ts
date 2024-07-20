import axios from 'axios';

interface signInUserProps {
  email: string;
  password: string;
}

const signInUser = async (data: signInUserProps) => {
  const { email, password } = data;

  try {
    const response = await axios.post('/api/auth/signin', {
      email,
      password,
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Internal server error');
  }
};

export default signInUser;
