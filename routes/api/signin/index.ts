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
  } catch (error: any) {
    if (error.response && error.response.data && error.response.data.message) {
      return {
        error: error.response.data.message,
      }
    } else {
      console.error(error);
      return {
        error: 'Internal server error',
      }
    }
  }
};

export default signInUser;
